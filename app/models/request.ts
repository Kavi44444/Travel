export class Request{
    
    constructor(
        public  eid:number=0,
        public  empname :string="",
        public  loc :string="",
        public  isLocal :string="",
        public  nDays:number=0,
        public  fromDate :string="",
        public  toDate :string="",
        public  mApproval:string="",
        public  dApproval:string=""
    ){}
}