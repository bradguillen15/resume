export type StackCategoryId = 'Frontend' | 'Backend' | 'Database' | 'AI';

export interface StackCategoryConfig {
  id: StackCategoryId;
  items: [string, ...string[]];
}
