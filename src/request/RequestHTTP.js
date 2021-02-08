import routers from "../routers/routers";

const requests = {};

requests.requestGET = async function () {
       const response = await fetch(routers.get, {
              method: "GET",
              headers: {
                     "Content-type": "application/json; charset=UTF-8",
              },
       });
       const data = await response.json();
       console.log(data);
       return data;
};

requests.requestPOST = async function () {
       const body = { title: "foo", body: "bar", userId: 1 };
       const response = await fetch(routers.post, {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                     "Content-type": "application/json; charset=UTF-8",
              },
       });
       const data = await response.json();
       console.log(data);
       return data;
};

requests.requestPUT = async function () {
       const body = { id: 1, title: "foo", body: "bar", userId: 1 };
       const response = await fetch(routers.put, {
              method: "PUT",
              body: JSON.stringify(body),
              headers: {
                     "Content-type": "application/json; charset=UTF-8",
              },
       });
       const data = await response.json();
       console.log(data);
       return data;
};

requests.requestDELETE = async function () {
       const response = await fetch(routers.delete, {
              method: "DELETE",
              headers: {
                     "Content-type": "application/json; charset=UTF-8",
              },
       });
       const data = await response.json();
       console.log(data);
       return data;
};

export default requests;
