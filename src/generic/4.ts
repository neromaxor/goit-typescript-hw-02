/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {}
}

class Pages extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}
