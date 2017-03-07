

export class consumer{
	constructor(public type: Type, public id : number ) {}

}

enum Type {
		CANVAS, MHCAMPUS_D2L, D2L, LMS_UNIT_TEST, LMS_UNIT_TEST1, LTI1, LTI2, SAKAI, LMS_UTEST, MHCAMPUS
	}