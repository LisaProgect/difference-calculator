const parsers = {
    json: JSON.parse,
};
export default (data, type) => parsers[type](data);
