import ini from 'ini';
import yaml from 'js-yaml';

const parsers = {
    json: JSON.parse,
    ini: ini.parse,
    yaml: yaml.load,
};
export default (data, type) => parsers[type](data);
