fetch ('https://api.data.gov.sg/v1/environment/psi')
                .then(response => response.json())
                .then(data =>  {
                    console.log(data);
                    let item=data.items[0].readings;
                    date = data.items[0].update_timestamp
                    //console.log(item[i].o3_sub_index.west)
                    no_of_rows =Object.keys(item).length

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
                        box0.innerHTML="<b>"+nameofbox+"</b>"
                        box1.innerHTML="<b>"+nameofbox.national+"</b>"
                        // box2.innerHTML="<b>"+items[i].carpark_info[0].lot_type+"</b>"
                        // box3.innerHTML="<b>"+items[i].carpark_info[0].total_lots+"</b>"
                        // box4.innerHTML="<b>"+items[i].carpark_info[0].lots_available+"</b>"

                    }
                });