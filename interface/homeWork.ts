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

interface IApiResponseSuccess {
    status: 'success';
    data: ISuccessResponseData;
}

interface IApiResponseError {
    status: 'failed';
    data: IErrorResponseData;
}

type IApiResponse = IApiResponseSuccess | IApiResponseError;


// Added a restriction, now there will be an error if you use unrelated types of status and data
// const resp: IApiResponse<IErrorResponseData> = {
//     status: "success",
//     data: {
//         errorMessage: "",
//         errorCode: 1,
//     }
// }