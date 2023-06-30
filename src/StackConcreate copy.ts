import StackBase from './StackBase';

export default class StackConcreate extends StackBase<string> {
  protected maxSize = 3;
  protected cantPushFirst: string | undefined = '0';
  constructor(items: string[] = []) {
    super(items);
  }
}
