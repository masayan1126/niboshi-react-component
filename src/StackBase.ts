export default abstract class StackBase<T> {
  constructor(private items: T[] = []) {}

  protected abstract maxSize: number;
  protected abstract cantPushFirst: T | undefined;

  all() {
    return this.items;
  }

  push(item: T) {
    if (this.items.length >= this.maxSize) {
      return;
    }

    if (item === this.cantPushFirst && this.isEmpty()) {
      return;
    }

    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
