export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  telephone: string;
  email: string;


  constructor(id?: number, firstName?: string, lastName?: string, city?: string, telephone?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.telephone = telephone;
    this.email = email;
  }
}
