import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3'
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public data: any[]=[];
 
  constructor(private activatedRoute: ActivatedRoute,
    private appService: AppService,private http:HttpClient) {

      this.getDataByMonth("").subscribe(response => {
        console.log(response);
        this.data=response;
        this.createVerticalBarChart();
      });
    }

  ngOnInit(): void {
  }

  getDataByMonth
    (param: any): Observable<any> {
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        };
    let url = this.appService.getSessionStorage('configurl') + '/getDataByMonth';
    return this.http.post<any>(url, JSON.stringify(param), httpOptions);
   }
  public createVerticalBarChart() {

    var margin = { top: 20, right: 50, bottom: 90, left: 90 },
      width = 2500 - margin.left - margin.right,
      height = 400 - margin.bottom;
    var actualWidth = 100;//Require for less data functionality
    if (this.data.length < 12) {//For less data functionality
      if (this.data.length == 1) {
        actualWidth = 200;
      }
      else if (this.data.length == 2) {
        actualWidth = actualWidth + 150;
      }
      else if (this.data.length > 2) {
        for (var i = 0; i < this.data.length; i++) {
          actualWidth = actualWidth + 100;
        }
      }
    }
    else {
      actualWidth = width;
    }

    var svg = d3.select("#chart")
      .attr("align", "center")
      .append("svg")
      .attr("width", actualWidth + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g").attr("transform", "translate(" + 0 + "," + margin.top + ")");

    //For xscale
    
    var x = d3.scaleBand()
      .range([margin.left, actualWidth - margin.right])
      .padding(0.1);
    //For yscale
    var y = d3.scaleLinear()
      .range([height - margin.bottom, margin.top]);



    var tooltip: any = d3.select("body")
      .append("div")
      .attr("class", "verticalChartToolTip")
    .style("position", "absolute")
    .style("display", " none")
     .style("min-width", "80px")
    .style("height", " auto")
    .style("text-align", "left")
    .style("line-height", "1")
     .style("font-weight", " bold")
    .style("padding", "2px")
    .style("background", "none repeat scroll 0 0 rgba(0, 0, 0, 0.8)")
    .style("color", "#fff")
    .style("border-radius", "2px;");
    render(this.data)
    function render(data) {
      
      var maxvaluesArray: any = [];//For storing only the value objects 
      data.forEach(d => {
        var ydomainValues;
       
          ydomainValues = d.id;
          //Keep the value as it is.
        
        maxvaluesArray.push(+ydomainValues);
        // maxvaluesArray.push(+d.value);
      });
      var max = Math.max.apply(null, maxvaluesArray);//For finding the maximum value from the array

      y.domain([0, max]).nice();
      x.domain(data.map(function (d) { return d.name; }));
     
      //Adding the bars
      g.selectAll("rect")
        .data(data)
        .enter().append("rect")
        .on("mousemove", function (d: any) {
          var xPosition = d3.event.pageX + 15;
          var yPosition = d3.event.pageY + 5;
          if (xPosition > width / 2) {
            xPosition = xPosition - tooltip.style("width").replace("px", "") - 5;
          }
          if (yPosition > height) {
            yPosition = yPosition - tooltip.style("height").replace("px", "") - 10;
          }
         
        })
        .on("mouseout", function (d) { tooltip.style("display", "none"); })
        .attr("x", (d: any) => x(d.name))
        .attr("y", (d: any): any => {
         
            return y(d.id);
          
          //return y(d.value);//earlier
        })
        .attr("height", (d: any): any => {
          if (d.id> 5) {//For SourceDBCall Structure
            var totalVolString = d.id;
            var ydomainValues = totalVolString;
            return y(0) - y(ydomainValues);
          }
          else {
           
            return y(0) - y(d.id);
          }
          // return  y(0) - y(d.value)//earlier
        })
        .attr("width", x.bandwidth())
        .style("fill", "steelblue");
        
      // add the y Axis
      g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(90,0)")
        .call(d3.axisLeft(y))
        .append('g')
        .attr("transform", "translate(" + (-(margin.left - 50)) + "," + (height / 2 - margin.right) + ")")
        .append("text")
        .attr("y", 2)
        .attr("x", y(y.ticks().pop()) + 0.5)
        .attr("dy", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .text("User Activity")
        .attr("transform", "rotate(-90)")
        .style("font-size", "15px");

      // add the x Axis
      g.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0," + (height - margin.bottom) + ")")
        .call(d3.axisBottom(x).tickValues([]))
        .append("text")
        /* .attr("y", 2)												// .attr("y", 2)
        .attr("x", x(x.ticks().pop()) + 0.5) 	 */					// .attr("y", y(y.ticks().pop()) + 0.5)
        .attr("dy", "0.32em")										// .attr("dy", "0.32em")
        .attr("fill", "#000")
        .attr("font-weight", "bold")
        .attr("text-anchor", "start")
        .text("Month")
        //.attr("transform", "translate(580,20)")// + (-(width/2 -20)) + ",50)")
        .attr("transform", "translate(" + (actualWidth / 2) + ",20)")// + (-(width/2 -20)) + ",50)")
        .style("text-anchor", "middle")
        .style("font-size", "14px");
    }//end of render function
  }//end of createVerticalBarChart

}

