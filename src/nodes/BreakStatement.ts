import Visitor from '../visitor';

export default class BreakStatement {
  static visit(node: any, visitor: Visitor) {
    return 'break';
  }
}