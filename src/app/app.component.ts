import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-table';
  public headerArray:Object[];
  public data : Object[];
  public rowsPerPage:number;
  public recordsCount:number;
  public tableReset:boolean;
  public loading:boolean=true;

  ngOnInit(){
    this.loading=true;
    this.headerArray = [{'label':'Campaign Name', 'name':'campaignName', 'colspan':'2'},
      {'label':'Description', 'name':'campaignDesc', 'colspan':'3'},
      {'label':'Industries', 'name':'industry', 'colspan':'4'},
      {'label':'Employee Size', 'name':'employeeSize', 'colspan':'2'},
      {'label':'Edit', 'name':'edit', 'colspan':'1', 'image':'Edit Image', 'action':true}
    ];

    // data for first page
    this.data=[
      {id: 1, industry: "Sports,Textiles,Mining,", campaignName: "camp1", employeeSize: "100-500,500-2000,50-100", campaignDesc: "desc 1", salesOwner: null},
      {id: 2, industry: "Construction,Education Services,", campaignName: "camp 2", employeeSize: "100-500",campaignDesc: "camp desc 2", salesOwner: null},
      {id: 3, industry: "Mining,", campaignName: "camp 3", campaignDesc: "description3", employeeSize: "100-500,500-2000", salesOwner: null}  
    ];

    this.rowsPerPage = 3;
    this.tableReset = true;
    this.recordsCount = 4;
    this.loading=false;
  }

  goToDetails(item){
    console.log('Details function', item);
    // Code for click on details
  }

  getDataTableRecords(item){
    this.data=[];
    this.loading=true;
    // get records for the above page

    if(item.firstRecord !== 1){
      this.data=[
        {id: 4, industry: "Sports,Textiles", campaignName: "camp 4", campaignDesc: "desc 4", employeeSize: "50-100", salesOwner: null}
      ];
    }else{
      this.data=[
        {id: 1, industry: "Sports,Textiles,Mining,", campaignName: "camp1", employeeSize: "100-500,500-2000,50-100", campaignDesc: "desc 1", salesOwner: null},
        {id: 2, industry: "Construction,Education Services,", campaignName: "camp 2", employeeSize: "100-500",campaignDesc: "camp desc 2", salesOwner: null},
        {id: 3, industry: "Mining,", campaignName: "camp 3", campaignDesc: "description3", employeeSize: "100-500,500-2000", salesOwner: null}  
      ];
    }


    this.loading=false;
    
  }

  dataTableAction(event:any){
    console.log('dataTableAction=', event);
    // Put code for the data table action
  }
}
