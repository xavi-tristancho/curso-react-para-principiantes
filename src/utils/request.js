const request = (url, options) =>
  fetch(`https://pre.api.autonomos.app/api/${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return res
        .json()
        .then((error) => Promise.reject({ status: res.status, error }));
    }
  });

export default request;
