export default class LinkDef {
  constructor(
    public prefix: string,
    public placeholder: string
  ) {
  }

  link(id: string): string {
    return this.placeholder.replace('{}', id);
  }

  label(id: string): string {
    return this.prefix + id;
  }

}
