import typing as t

from superduperdb.core.base import Component, Placeholder
from superduperdb.core.model import Model
from superduperdb.datalayer.base.query import Select
from superduperdb.queries.serialization import from_dict, to_dict


class Watcher(Component):
    """
    Watcher object which is used to process a column/ key of a collection or table,
    and store the outputs.

    :param select: Object for selecting which data is processed
    :param model: Model for processing data
    :param key: Key to be bound to model
    :param features: Dictionary of mappings from keys to models
    :param active: Toggle to ``False`` to deactivate change data triggering
    """

    features: t.Dict
    key: str
    model: t.Union[Placeholder, Model]
    select: Select
    variety = 'watcher'

    def __init__(
        self,
        select: Select,
        model: t.Union[Model, str],
        key: str = '_base',
        features: t.Optional[t.Dict] = None,
        active: bool = True,
    ):
        self.model = model if isinstance(model, Model) else Placeholder(model, 'model')
        self.select = select
        self.key = key
        self.features = features or {}
        self.active = active
        identifier = f'{self.model.identifier}/{self.key}'
        super().__init__(identifier)

    def asdict(self) -> t.Dict[str, t.Any]:
        return {
            'model': self.model.identifier,
            'select': to_dict(self.select),
            'key': self.key,
            'identifier': self.identifier,
            'features': self.features or {},
            'active': self.active,
        }

    @staticmethod
    def cleanup(info, database) -> None:
        select = from_dict(info['select'])
        select.model_cleanup(database, model=info['model'], key=info['key'])

    def schedule_jobs(self, database, verbose=False, dependencies=()) -> t.List[t.List]:
        if not self.active:
            return []
        ids = self.select.get_ids(database)  # type: ignore[attr-defined]
        if not ids:
            return []
        out = [
            database._apply_watcher(
                self.identifier,
                ids=ids,
                verbose=verbose,
                dependencies=dependencies,
            )
        ]
        return out
