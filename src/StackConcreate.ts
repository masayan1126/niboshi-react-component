import StackBase from "./StackBase";


export default class StackConcreate extends StackBase<number> {
  protected maxSize = 3;
  protected cantPushFirst: number | undefined = 0;
  constructor(items: number[]) {
    super(items);
  }
}
