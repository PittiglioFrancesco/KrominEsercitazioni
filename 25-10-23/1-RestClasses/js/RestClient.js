export class RestClient {
  constructor(url) {
    this.url = url;
  }

  create(object) {

    const options =  {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(object)
    }

    const request = new Request(this.url, options);

    fetch(request)
      .then((response) => response.json())
      .then((user) => {
        return user;
      })
      .catch((error) => {
        throw new Error('Si è verificato un erroe con status code:', error.status);
      });
  }

  read(id) {

    const options =  {
      method: 'GET',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
    }

    const request = new Request(`${this.url}${id}`, options);

    fetch(request)
      .then((response) => response.json())
      .then((user) => {
        return user;
      })
      .catch((error) => {
        throw new Error('Si è verificato un erroe con status code:', error.status);
      });
  }

  update(id, object) {

      const options =  {
        method: 'PUT',
        headers: new Headers({
          "Content-Type": "application/json",
          body: object
        }),
      }
  
      const request = new Request(`${this.url}${id}`, options);
  
      fetch(request)
        .then((response) => response.json())
        .then((user) => {
          return user;
        })
        .catch((error) => {
          throw new Error('Si è verificato un erroe con status code:', error.status);
        });
  }

  delete(id) {

    const options =  {
      method: 'DELETE',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
    }

    const request = new Request(`${this.url}${id}`, options);

    fetch(request)
      .then((response) => response.json())
      .then((user) => {
        return user;
      })
      .catch((error) => {
        throw new Error('Si è verificato un erroe con status code:', error.status);
      });
  }
}

export class RestClientAsync {
  constructor(url) {
    this.url = url;
  }

  async create(object) {

    const options =  {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(object)
    }

    const request = new Request(this.url, options);

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Si è verificato un erroe con status code:', response.status);
    }

    const data = await response.json();
    return data;
  }

  async read(id) {

    const options =  {
      method: 'GET',
    }

    const request = new Request(`${this.url}${id}`, options);

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Si è verificato un erroe con status code:', response.status);
    }

    const data = await response.json();
    return data;
  }

  async update(object, id) {

    const options =  {
      method: 'GET',
      body: JSON.stringify(object)
    }

    const request = new Request(`${this.url}${id}`, options);

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Si è verificato un erroe con status code:', response.status);
    }

    const data = await response.json();
    return data;
  }

  async delete(id) {

    const options =  {
      method: 'DELETE',
      headers: new Headers({
        "Content-Type": "application/json"
      }),
    }

    const request = new Request(`${this.url}${id}`, options);

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Si è verificato un erroe con status code:', response.status);
    }

    const data = await response.json();
    return data;
  }
}