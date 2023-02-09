const person = {
  name: 'darwish',
  age: 23,
  nationality: 'China'
}

const proxyPerson = new Proxy(person, {
  get(target, props) {
    console.log("现在你想要的值是：", target[props])
    return target[props];;
  },
  set(target, props, receiver) {
    target[props] = receiver;
    return true
  },
  delete(target, props, receiver) {

  }
})
console.log(person);
console.log(proxyPerson.name);
proxyPerson.age = 11;
console.log(proxyPerson.age);