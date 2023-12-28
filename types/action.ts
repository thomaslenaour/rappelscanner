export type ServerActionResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string };
