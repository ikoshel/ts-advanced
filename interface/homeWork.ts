/*{
	"sum": 10000,
	"from": 2,
	"to": 4
}

// In case of success
{
	"status": "success",
	"data": {
		"databaseId": 567,
		"sum": 10000,
		"from": 2,
		"to": 4
	}
},

// In case of fail
{
	"status": "failed",
	"data": {
		"errorMessage": "Недостатньо коштів",
		"errorCode": 4
	}
}
 */

interface IRequestPayload {
    sum: number;
    from: number;
    to: number;
}

interface ISuccessResponseData extends IRequestPayload {
    databaseId: number;
}

interface IErrorResponseData {
    errorMessage: string;
    errorCode: number;
}

interface IApiResponse<T> {
    status: 'success' | 'failed';
    data: T;
}

type SuccessResponse = IApiResponse<ISuccessResponseData>;
type ErrorResponse = IApiResponse<IErrorResponseData>;