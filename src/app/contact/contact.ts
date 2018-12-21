export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  address: string;
  postCode: string;
  telephone: string;
  email: string;


  constructor(id?: number, firstName?: string, lastName?: string, city?: string, address?: string, postCode?: string, telephone?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.address = address;
    this.postCode = postCode;
    this.telephone = telephone;
    this.email = email;
  }
}
