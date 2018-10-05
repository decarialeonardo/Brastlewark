import * as HttpStatus from 'http-status-codes';

declare interface Error {
    stack: string
    response: {
        status: number
        data: {
            message: string
            stack_trace: string
        }
    }
}

declare interface IdecorateError {
    status: number
    message: string
}

export const decorateError = (err: Error): IdecorateError => {
    const status = err.response && err.response.status ? err.response.status : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = err.response && err.response.data 
        ? err.response.data.message
            ? err.response.data.message
            : `${err.response.data.stack_trace.substring(0, 100)}...`
        : `${ err.stack.substring(0, 100) }...`;
    
    return { status, message };
}