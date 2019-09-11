function parser_params (str) {
  str = str.substring(1);
  let array = str.split('&');
  let result_object = {};
  array.map((unique_param) => {
    const [name, value] = unique_param.split("=");
    result_object[name] = value;
  });
  return result_object;
}

export default parser_params;
