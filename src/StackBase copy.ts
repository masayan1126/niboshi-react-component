export default abstract class StackBase<T> {
  constructor(private items: T[] = []) {}

  protected abstract maxSize: number;
  protected abstract cantPushFirst: T | undefined;

  public all() {
    return this.items;
  }

  public push(item: T) {
    if (this.items.length >= this.maxSize) {
      return;
    }

    if (item === this.cantPushFirst && this.isEmpty()) {
      return;
    }

    this.items.push(item);
  }

  public pop() {
    if (this.isEmpty()) {
      return;
    }
    return this.items.pop();
  }

  public isEmpty() {
    return this.items.length === 0;
  }
}
