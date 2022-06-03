fetch ('https://api.data.gov.sg/v1/environment/psi')
                .then(response => response.json())
                .then(data =>  {
                    //console.log(data);
                    let item=data.items[0].readings;
                    date = data.items[0].update_timestamp
                    date = date.split("T")
                    time = date[1].split("+")
                    //console.log(item[i].o3_sub_index.west)
                    no_of_rows =Object.keys(item).length

                    var name = document.getElementById("h1")
                    name.innerHTML= "<h3> PSI Info taken at "+ date[0] +" on "+ time[0]+"</h3>"

                    for (var i=0; i<no_of_rows; i++)
                    {
                        //var obj = Object.keys(item)[i]
                        
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
                        box1.innerHTML="<b>"+item[nameofbox].national+"</b>"
                        box2.innerHTML="<b>"+item[nameofbox].central+"</b>"
                        box3.innerHTML="<b>"+item[nameofbox].west+"</b>"
                        box4.innerHTML="<b>"+item[nameofbox].east+"</b>"
                        box5.innerHTML="<b>"+item[nameofbox].north+"</b>"
                        box6.innerHTML="<b>"+item[nameofbox].south+"</b>"

                    }
                });