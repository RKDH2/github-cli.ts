export interface ErrorObject {
  code: string;
  message: string;
}

export function timeout(error: ErrorObject): void {
  if (error.code === 'ECONNABORTED') {
    console.error('Request timed out');
  } else {
    console.error('Request failed:', error.message);
  }
}
