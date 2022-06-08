fetch ('https://api.data.gov.sg/v1/environment/psi')
                .then(response => response.json())
                .then(data =>  {
                    //console.log(data);
                    let item=data.items[0].readings;
                    date = data.items[0].update_timestamp
                    //date = date.split("T")
                    //time = date[1].split("+")
                    newdate =  new Date(date)
                    //console.log(item[i].o3_sub_index.west)
                    no_of_rows =Object.keys(item).length

                    var name = document.getElementById("date")
                    name.innerHTML= "<p id='date'>Last updated on "+ newdate.toDateString() +" at "+ newdate.toLocaleTimeString('en-US')+"</p>"

                    for (var i=0; i<no_of_rows; i++)
                    {
                        var table = document.getElementById("psitable");
                        var row = table.insertRow(i+1);
                        box6 = row.insertCell(0);
                        box5 = row.insertCell(0);
                        box4 = row.insertCell(0);
                        box3 = row.insertCell(0);
                        box2 = row.insertCell(0);
                        box1 = row.insertCell(0);
                        box0 = row.insertCell(0);

                        nameofbox = Object.keys(item)[i]
                        console.log(item)
                        box0.innerHTML="<b>"+nameofbox+"</b>"
                        box1.innerHTML="<th scope='row'>"+item[nameofbox].national +"</th>"
                        box2.innerHTML="<th scope='row'>"+item[nameofbox].central+"</th>"
                        box3.innerHTML="<th scope='row'>"+item[nameofbox].west+"</th>"
                        box4.innerHTML="<th scope='row'>"+item[nameofbox].east+"</th>"
                        box5.innerHTML="<th scope='row'>"+item[nameofbox].north+"</th>"
                        box6.innerHTML="<th scope='row'>"+item[nameofbox].south+"</th>"

                    }
                });

                function refresh(){
                    window.location.reload("Refresh")
                  }