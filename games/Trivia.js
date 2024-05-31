function format_question(type=0,data={'Q':0,'a':0,'b':0,'c':0,'d':0}){
    let structure;

    switch (type){
        case 0:
            structure = `<div class="choice">\
                          <div id="IMG" style="background-image: url('${data['img']}');"></div>\
                          <div id="TXT"><h1>${data['Q']}</h1></div>\
                          <button onclick="checkAnswer(this.id)" id="${data['a']}">${data['a']}</button>\
                          <button onclick="checkAnswer(this.id)" id="${data['b']}">${data['b']}</button>\
                          <button onclick="checkAnswer(this.id)" id="${data['c']}">${data['c']}</button>\
                          <button onclick="checkAnswer(this.id)" id="${data['d']}">${data['d']}</button>\
                         </div>`;
            break;
        case 1:
            structure = `<div class="answer">\
                          <h1>${data['Q']}</h1>\
                          <input type="text">\
                          <button>submit</button>\
                         </div>`;
            break;
        case 2:
            structure = `<div class="TrueFalse">\
                          <h1>${data['Q']}</h1>\
                          <button id="${data['a']}">True</button>\
                          <button id="${data['b']}">False</button>\
                         </div>`;
            break;
        case 3:
            structure = `<div class="estimate">\
                           <h1>${data['Q']}</h1>\
                           <input type="range" id="ranger" min="${data['a']}" max="${data['a']}">\
                           <button>submit</button>\
                          </div>`;
            break;
        case 4:
            structure = `<div class="blankspace">\
                           <h1>${data['Q']}</h1>\
                           <button id="${data['a']}">${data['a']}</button>\
                           <button id="${data['b']}">${data['b']}</button>\
                           <button id="${data['c']}">${data['c']}</button>\
                           <button id="${data['d']}">${data['d']}</button>\
                          </div>`;
            break;
        case 5:
            structure = `<div class="matching">\
                           <h1>${data['Q']}</h1>\
                           <p>dragg and drop matches</p>\
                          </div>`;
            break;
        case 6:
            structure = `<div class="pictures">\
                          <h1>${data['Q']}</h1>\
                          <button><img src=${data['a']}><span id=${data['a']}>${data['a']}</span></button>\
                          <button><img src=${data['a']}><span id=${data['a']}>${data['a']}</span></button>\
                         </div>>`;
            break;
    }
    return structure;
}

function checkAnswer(butID){
    let answers = questions[Q_nr][1];
    answers = Object.keys(answers).slice(1,-1);
    answers = questions[Q_nr][1][answers[corr]];

    if (butID == answers){
        Q_nr++;
        corr = Math.round(Math.random() * Object.keys(questions).length)-1;
        question_main();

        if (Q_nr == Object.keys(questions).length - 1){
            Q_nr = 0;
            q_nr.style.marginLeft
        }
    }
}








//
//
//
//
//
// let Q;
// let Room;
// const QCanvas = document.getElementsByClassName("display")[0];
// const Museum_lib = {
//     // place name: [lat, lon]
//     // [3] [4] [5]
//     // [2] [8] [6]
//     // [1] [entrance] [7]
//     'entrance': [51.43442602799476, 5.481777034366868, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room1': [51.43449496429616, 5.481704216929575, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room2': [51.43460866784703, 5.481743108958766, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room3': [51.43471401059015, 5.481845032897336, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room4':[51.43466050319544, 5.482022058685378, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room5':[51.43458693042537, 5.482231270980336, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room6':[51.434468210478336, 5.482142758086315, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room7':[51.43436621140422, 5.482032787521017, ["vanabben.png","museumbackground.png","arrow.png"]],
//     'room8':[51.43454763582916, 5.481926840269082, ["vanabben.png","museumbackground.png","arrow.png"]]
// };
// function NewQuestion(){
// const Q_types = [0,1,2,3,4,5,6]
// const random = Math.floor(Math.random() * Q_types.length);
//
// Q = Q_types[random];
// QShow();
// }
// function NewRoom() {
// const keys = Object.keys(Museum_lib);
// const random = Math.floor(Math.random() * keys.length);
// const RoomName = keys[random];
// document.getElementById("room").innerHTML = RoomName;
// QShow();
// }
// function QShow(){
// let structure;
// QCanvas.innerHTML = "";
//
// if(Q==0){
//   structure = ShowQ1("Is dit de vraag?","a","b","c","d");
// }
// if(Q==1){
//   structure = ShowQ2();
// }
// if(Q==2){
//   structure = ShowQ3();
// }
// if(Q==3){
//   structure = ShowQ4();
// }
// if(Q==4){
//   structure = ShowQ5();
// }
// if(Q==5){
//   structure = ShowQ6();
// }
// if(Q==6){
//   structure = ShowQ7();
// }
//
// QCanvas.innerHTML = structure;
// }
//
// function ShowQ1(question,a,b,c,d){
// let structure = `<div className="choice">\
//                   <h1>${question}</h1>\
//                   <button id="${a}">${a}</button>\
//                   <button id="${b}">${b}</button>\
//                   <button id="${c}">${c}</button>\
//                   <button id="${d}">${d}</button>\
//                 </div>`;
// return structure;
// }
// function ShowQ2(question){
// let structure = `<div class="answer">\
//                   <h1>${question}</h1>\
//                   <input type="text">\
//                   <button>submit</button>\
//                  </div>`;
// return structure;
// }
// function ShowQ3(question,a,b){
// let structure = `<div class="TrueFalse">\
//                   <h1>${question}</h1>\
//                   <button id="${a}">True</button>\
//                   <button id="${b}">False</button>\
//                 </div>`;
// return structure;
// }
// function ShowQ4(question,a){
// let structure = `<div class="estimate">\
//                   <h1>${question}</h1>\
//                   <input type="range" id="${a}">\
//                   <button>submit</button>\
//                 </div>`;
// return structure;
// }
// function ShowQ5(question,a,b,c,d){
// let structure = `<div class="blankspace">\
//                     <h1>${question}</h1>\
//                     <button id="${a}">${a}</button>\
//                     <button id="${b}">${b}</button>\
//                     <button id="${c}">${c}</button>\
//                     <button id="${d}">${d}</button>\
//                   </div>`;
// return structure;
// }
// function ShowQ6(question){
//   let structure = `<div class="matching">
//                     <h1>${question}</h1>
//                     <p>dragg and drop matches</p>
//                   </div>`;
//   return structure;
// }
//
// function ShowQ7(question,url1,url2,id1,id2){
// let structure = `<h1>${question}</h1>\
//       <button><img src=${url1}><span id=${id1}>${id2}</span></button>\
//       <button><img src=${url2}><span id=${id1}>${id2}</span></button>`;
// return structure;
// }
