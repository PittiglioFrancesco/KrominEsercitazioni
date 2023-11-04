export class UserAPI {
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

  async readUserInfo(id) {

    const options =  {
      method: 'GET',
    }

    const request = new Request(`${this.url}/${id}`, options);

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Si è verificato un erroe con status code:', response.status);
    }

    const data = await response.json();
    const userData = {
      accountName: data.firstname + " " + data.lastname,
      profileImg: data.imgSrc,
    }
    return userData;
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

export class PostsAPI {
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

    const request = new Request(`${this.url}/${id}`, options);

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Si è verificato un erroe con status code:', response.status);
    }

    const data = await response.json();
    return data;
  }

  async readAll() {

    const options =  {
      method: 'GET',
    }

    const request = new Request(`${this.url}`, options);

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