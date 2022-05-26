fetch ('https://api.data.gov.sg/v1/environment/psi')
                .then(response => response.json())
                .then(data =>  {
                    console.log(data);
                    let item=data.items[0].readings;
                    console.log(item)
                    //console.log(items.west)

                    for (var i=0; i<item.length; i++)
                    {
                        var obj = item[i]
                        console.log(obj.west)
                        // var table = document.getElementById("psitable");
                        // var row = table.insertRow(i+1);
                        // box6 = row.insertCell(0);
                        // box5 = row.insertCell(0);
                        // box4 = row.insertCell(0);
                        // box3 = row.insertCell(0);
                        // box2 = row.insertCell(0);
                        // box1 = row.insertCell(0);
                        // box0 = row.insertCell(0);

                        // box0.innerHTML="<b>"+items[i].carpark_number+"</b>"
                        // box1.innerHTML="<b>"+items[i].update_datetime+"</b>"
                        // box2.innerHTML="<b>"+items[i].carpark_info[0].lot_type+"</b>"
                        // box3.innerHTML="<b>"+items[i].carpark_info[0].total_lots+"</b>"
                        // box4.innerHTML="<b>"+items[i].carpark_info[0].lots_available+"</b>"

                    }
                });