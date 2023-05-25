var prouductnameInput=document.getElementById('prouductName')   //1
var prouductCategoryInput=document.getElementById('prouductCategory')  //1
var prouductpriceInput=document.getElementById('prouductprice')   //1
var prouductdescribtionInput=document.getElementById('prouductdescribtion')   //1



var prouductcontainer =[]  //2

var addbtnn = document.getElementById("addbtn")//4 ubdate
var ubdatebtnn = document.getElementById("ubdatebtn")//4 ubdate

if(localStorage.getItem('products') !=null){  //3 =>2
    prouductcontainer =JSON.parse(localStorage.getItem('products')) // 3
    displayProduct()
}

function addProduct(){   //1
    var productObj ={   //1
        name: prouductnameInput.value, //1
        Category: prouductCategoryInput.value,  //1
        price: prouductpriceInput.value,  //1
        describtion: prouductdescribtionInput.value, //1

    }

    // console.log(productObj)
  
        prouductcontainer.push(productObj)     //1
        // console.log(prouductcontainer)  //1
    // بعد ميعمل بوش عاوزين نخزن الحاجه علشان لو عملنا فريش الحاجه بتتمسح

  
       localStorage.setItem('products',JSON.stringify(prouductcontainer))  //  3=>1 prouductcontainer دي اراي لازم تتحول لاسترينج علشان اللوكال بتاخد اتنين استرينج
  
    // localStorage.setItem('myname' , 'mido')
    

    displayProduct()  //1

    clearInput() // clear

//    var x =prouductNameInput.value
//     console.log(x)
}



function displayProduct(){  //2  اخر حاجه ف الخطوه التانية لما تعمل ريفريش اللي انت مسجله بيختفي
    var cartona=`` //2

    for (var i=0; i<prouductcontainer.length;i++){ //2

        cartona+=`  
    <tr class="text-white">

        <td>${prouductcontainer[i].name}</td>
        <td>${prouductcontainer[i].Category}</td>
        <td>${prouductcontainer[i].price}</td>
        <td>${prouductcontainer[i].describtion}</td>
        <td><button  onclick="DeleteItem(${i})" class="btn btn-sm btn-outline-info">Delete</button></td> 
        <td><button onclick="SetFormForUbdate(${i})" class="btn btn-sm btn-outline-info bg-danger" >Ubdate</button></td>
        
        
    </tr>
        
        `
    }
document.getElementById("tbody").innerHTML=cartona   //2


}  

// بتمسح الكلام اللي انت كنت كاتبه
function clearInput()
{
    prouductnameInput.value=""
    prouductCategoryInput.value=""
    prouductpriceInput.value=""
    prouductdescribtionInput.value=""
}


// delete 4  ==> onclick="DeleteItem(${i})" button
function DeleteItem(index){
    prouductcontainer.splice(index,1)
    localStorage.setItem('products',JSON.stringify(prouductcontainer)) 
    displayProduct()

}

///////// ubdate
function SetFormForUbdate(index){

    addbtnn.classList.replace('d-block','d-none')
    ubdatebtnn.classList.replace('d-none','d-block')
    prouductnameInput.value = prouductcontainer[index].name
    prouductCategoryInput.value = prouductcontainer[index].Category
    prouductpriceInput.value = prouductcontainer[index].price
    prouductdescribtionInput.value = prouductcontainer[index].describtion
    indexUbdate =index
}




indexUbdate =0 //global 
function ubdateData(){
    var productObj ={   //1
        name: prouductnameInput.value, //1
        Category: prouductCategoryInput.value,  //1
        price: prouductpriceInput.value,  //1
        describtion: prouductdescribtionInput.value, //1

    }

    prouductcontainer.splice(indexUbdate,1,productObj)
    localStorage.setItem('products',JSON.stringify(prouductcontainer)) 
    displayProduct()
    addbtnn.classList.replace('d-none','d-block')
    ubdatebtnn.classList.replace('d-block','d-none')
    clearInput()
}


/////////////



function searchItems(){
     var searchIputs = document.getElementById("searchIputs").value
    var box2=``
    for(var i=0 ; i < prouductcontainer.length ; i++ ){
        if(prouductcontainer[i].name.toLowerCase().includes(searchIputs.toLowerCase()) ){

            box2+=`
            <tr class="text-white">
        
                <td>${prouductcontainer[i].name}</td>
                <td>${prouductcontainer[i].Category}</td>
                <td>${prouductcontainer[i].price}</td>
                <td>${prouductcontainer[i].describtion}</td>
                <td><button  onclick="DeleteItem(${i})" class="btn btn-sm btn-outline-info">Delete</button></td> 
                <td><button onclick="SetFormForUbdate(${i})" class="btn btn-sm btn-outline-info bg-danger" >Ubdate</button></td>
                
            </tr>
                `
        }
      
    }
    document.getElementById("tbody").innerHTML=box2

}



