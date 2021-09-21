// ==UserScript==
// @name         NewConexEd-Tutor - Source
// @match        *.craniumcafe.com/d/*
// @match        *.craniumcafe.com/meetings/*
// @grant        none
// @run-at       document-end
// ==/UserScript==


var wbClient = "/client/js/app-ae23a59d4efb7d24e0b9.js";

var modInfo = {
    "table1":{col:"#00ff00",inl:"KC",tnum:"T1",tutoring:true,super:true,incenter:true},
    "table2":{col:"#9900ff",inl:"🌻 ZP",tnum:"T2",tutoring:true,incenter:true,immune:true,super:true,specialSmileys:"💰🚀🏎🛫🚴‍🎡🦖🦕🐕🐩🐌👀☂️"},
    "table3":{col:"#32f16b",inl:"BS",tnum:"T3",tutoring:true},
    "table5":{col:"#f1c232",inl:"🦖 PS",tnum:"T5",tutoring:true,incenter:true,hasTable8:true,super:true,listener:false,extraTables:["2209357","3209357"]},
    "table6":{col:"#00ff00",inl:"NR",tnum:"T6",tutoring:true},
    "7table":{col:"#8e76c5",inl:"🐈 NV",tnum:"T7",tutoring:true,incenter:true,immune:true,super:true,listener:true},
    "table9":{col:"#ff00ff",inl:"🌸 LY",tnum:"T9",incenter:true, super:true, extraTables:["2595782","3595782","4595782","5595782","6595782","7595782","8595782"], hasTable8:true,listener:true},
    "table10":{col:"#ff9900",inl:"AC",tnum:"T10",tutoring:true},
    "table11":{col:"#b4a7d6",inl:"VA",tnum:"T11",tutoring:true},
    "table12":{col:"#a61c00",inl:"QU",tnum:"T12",tutoring:true},
    "table15":{col:"#4a86e8",inl:"NR",tnum:"T15",tutoring:true},
    "table16":{col:"#4ce7a4",inl:"JL",tnum:"T16",tutoring:true},
    "mathnasiumhomeburbank":{col:"#ff00ff",inl:"🌸 LY",tnum:"T9",super:true,incenter:true,ismaster:true,hasTable8:true,listener:true},
    "default":{col:"#4a86e8",inl:"",tnum:"T0"},
}

window.userInfo = {
    modsList: ["1209168","1209320","1209339","1209357","2209357","3209357","8209357","1209382","1209417","1595782","2595782","3595782","4595782","5595782","6595782","7595782","8595782","1604276","1716307","4632508","4694091","4766116"],
    modNames: ["7table","table1","table2","table3","table5","table6","table7","table17","table8","table9","table10","table11","table12","table15","table16","table17","mathnasium@homeburbank","anthonyflores","kevinceron","mathnasium"],
    nameMatch:{"Mathnasium":"wait room","Erika Garcia":"Erika Garcia","Rajesh Mathew":"Sophie Mathew","Brenda Pokorny":"Anthony Pokorny","Anne-Marie Osgood":"Skylar Roman","Patrick Khosravian":"Patrick Khosravian","Stella Sgroi":"Stella Sgroi/Sofia Sgroi","Darrin Wells":"Caitlin Wells","Addison Kanda":"Addison Kanda","candace macatangay":"Che Mclaughlin","April De Higes":"Adriana De Higes","Julia Dilacar":"Julia Dilacar/Jakob Dilacar","Jeanne Knappmiller":"Fiona Knappmiller","Ava Roberts":"Ava Roberts","Ossan Seferian":"Katerina Safarian","chakameh hartman":"Siena Hartman","allan coello":"Bianca Oseguera","Adrian Torres":"Adrian Torres","lisa palencia":"Saeed Rivera/Genesis Candelario","Karen Bowlin":"Emmet Bowlin/Charlie Bowlin","DAVID NUNO":"David Nuno","Ruby Arana":"Ruby Arana","Vanessa Takizawa":"Vanessa Takizawa","Charlotte Bowlin":"Charlie Bowlin","James Pouncey":"James Pouncey/Emma Lee Pouncey","Valerie Juarez":"Valerie Juarez","Sebastien Laffoux":"Markus Laffoux","Jayden Moelling":"Jayden Moelling","Charnnont Phivnil":"Charnnont Phivnil","Charlette Harper":"Madison Cobb","Chang Gould Family":"Maleia Gould/Zoey Gould","Dana S.":"Dana Sahagon","Joey Fernandes":"Joey Fernandes","Tara Hattin":"Teagan Hattin/David Hattin","Shoushan Undorf":"Dimitri Undorf","Arthur Savin":"Arthur Savin","ARIENNE GOOD":"Abigail Podbielski","Sebastian Stoffers":"Sebastian Stoffers","Andy Skoots ":"Andrew Zeytounian/Alexa Zeytounian","purdum":"Ian Purdum","Kyle Nino-Gonzalo":"Kyle Gonzalo","Lydia Lagunas":"Lydia Lagunas","Nico Brouwer":"Nico Brouwer","daniel coscia":"Daniel James Coscia","Maleia Gould":"Maleia Gould","Maxwell Campion":"Maxwell Campion","sandra marina nevarez":"Sandra Nevarez","Grace Sapyta":"Grace Sapyta","Anna Gharibian":"Nairi Zeytounzian/Shaunt Zeytounzian","Kailey Husted":"Kailey Husted","Molly Foenander":"Molly Foenander","Aren Alahverdian":"Michelle Lakshtanov","King Crimson":"Eric Shirvani","Alexa Mardian":"Alexa Mardian","Daniel Ware":"Daniel Ware","Tempestuous":"Griffon Calvert","Skyla Lee":"Renee Shin","Jay Bhakta":"Rishan Bhakta","Taliyah Simone":"Taliyah Herdsman","Jason Cano":"Jason Cano","Jeff Hartman":"Siena Hartman","MAKOTO":"Mira Kimura","Emilya Gregoeian":"Emilya Gregorian","Abigail Hartman":"Abigail Hartman","Isabel Grosleib":"Isabel Grosleib","MARCO FOTTER":"Marco Fotter","Banshee Jee":"Jadyn Escobar","Anna Christina Trieu":"Scarlett Trieu","Kymberley Wheeler":"Elodie Wheeler","Eddie Leverett":"Eddie Leverett","Drake Morales":"Drake Morales","Elodie Wheeler":"Elodie Wheeler","Daniel Coscia":"Daniel James Coscia","Anela":"Anela Enanoria","Karthik D":"Karthik Darbhala","Griselda Lopez Lopez":"Jadyn Escobar","Alexis Danielle Kulinsky":"Alexis Kulinsky","Olivia Barrero":"Olivia Barrero","Adriana Soto":"Adriana Soto/Oscar Soto","Leah Madariaga":"Leah Madariaga","akash kodavati":"Akash Kodavati","Charlotte Bartels":"Charlotte Bartels","Nyla Calhoun":"Nyla Calhoun","Aiyden Pitpitan-Goett":"Aiyden Pitpitan","Oscar Soto":"Oscar Soto","Michael Shirvani":"Evan Shirvani","Jadyn Escobar":"Jadyn Escobar","Armond Sarkisian":"Ellen Sarkisian","1Legojay":"Samuel Crivelli","Allison Foenander":"Allison Foenander","Lisa G":"Anna Giordano","zoe torres":"Zoe Torres","carrie luce":"Megyn Luce","Giselle Lepe":"Giselle Lepe","Sofia Sgroi":"Sofia Sgroi/Stella Sgroi","Augustine Melendez":"Damian Melendez-Galeano","Tabletop Dragons":"Ian Kang","Skylar Roman":"Skylar Roman","Emily Bates":"Emily Bates","Sophia Fotter":"Sophia Fotter","Manuel Flores":"Manuel Flores","Katerina Safarian":"Katerina Safarian","Matthew Martirosyan":"Matthew Martirosyan","Abby Hatem":"Abby Hatem/Siena Hatem","Lisa Rostomyan":"Lina Rostomyan","Chip Ackley":"Chip Ackley","Kyler Davis":"Kyler Davis","Nick Kleissas":"Evy Kleissas","Arsen Kazarian":"Arsen Kazarian","Anh Le":"Anh Le","Cristian Parszik-Resendez":"Cristian Parszik-Resendez","kyla McHugh":"Kyla McHugh","Norie Abrahamian":"Alina Abrahamian","Canis Canis":"Lorenza Corsini","wolfeoo.101":"Jacob Luciano/Jillian Luciano","George Wyatt-Leichtweisz":"George Wyatt","Ryan Maddigan":"Ryan Maddigan","Isabella Tejeda":"Isabella Tejeda","Gabriella Hernandez":"Gabriella Hernandez","Peyton Kanda":"Peyton Kanda","Eva Famosa-Enenmoh":"Eva Famosa-Enenmoh","Marco Flores":"Marco Flores","Samantha Cruz":"Samantha Cruz","Faith Okeefe":"Faith Okeefe","Jae Rembert":"Jayden Hamilton","Esther Rubalcava":"Jasmine Gonzalez","Evangelia Kleissas":"Evy Kleissas","Janet Shirvani":"Eric Shirvani","Sophie Mathew":"Sophie Mathew","Darren Sarkissian":"Darren Sarkissian","Angelina Karamyan":"Angelina Karamyan","Gemma Jewel":"Gemma Lafontant","Askhat sulaimanov":"Askhat Sulaimanov","Tomas ":"Scarlett Hungerford","Mathilda Quinn":"Mathilda George","Lily Campion":"Lily Campion","Alexis Kulinsky":"Alexis Kulinsky","Ethan Cohen":"Ethan Cohen","ki jin Kim":"Eunice Kim","Dimitry Orlov":"Katherine Orlov","amy der avanasian":"Amy Der Avanasian","Megyn Luce":"Megyn Luce","McFalshon":"Brandon McLain","Jeyton Lee":"Jeyton Lee","Lauren Chaparro":"Lauren Chaparro/Sydney Chaparro","Jacob Rantz":"Jacob Rantz","Emmet Bowlin":"Emmet Bowlin","Charlotte Ackley":"Chip Ackley","Andy Eats The World":"Andrew Spackman","Gavin Lu":"Gavin Lu","Rebecca K":"Rebecca King","Monica Kaufman":"Joseph Kaufman","Lukas Beltran":"Lukas Beltran","Sophia Huerta":"Sophia Huerta","Mark Sabillo":"Marcie Sabillo","Monica Bean":"Israfil Muqarrabun","Jennifer Ruano":"Saeed Rivera/Genesis Candelario","Eliza Bowren":"Eliza Bowren","Jessica Han":"Jessica Han","Penelope W":"Penelope White","Nora Crivelli":"Nora Crivelli","Abigail Podbielski":"Abigail Podbielski","Juliana Cho":"Peyton Kanda/Addison Kanda","Chavisa Phivnil":"Chavisa Phivnil","Wesley Farrow":"Wesley Farrow","Supertiger H.R":"Hannah Reyes","Karen Laffoux":"Markus Laffoux","Siena Hatem":"Siena Hatem/Abby Hatem","Jake Avetissian":"Jake Avetissian","Keira Siefert":"Keira Siefert","Kristie Bumroongpongse":"Kristie Marie Bumroongpongse","Val Sarkissian":"Darren Sarkissian","Cristina Gutierrez":"Cristina Gutierrez","Jayden Hamilton":"Jayden Hamilton","El Nino":"Daniel Ware","Jaime Han":"Jaime Han","Michelle Lakshtanov":"Michelle Lakshtanov","Maria Escobedo":"Carmen Gherardi","Terry Guerrero":"Ellie Guerrero/Paola Guerrero","Joelle Grace Villegas":"Joelle Villegas","Connor Lu":"Connor Lu","Brielle Villegas":"Brielle Villegas","Roxy Enanoria":"Anela Enanoria","silver shells":"Sophia Lu","Its Safina":"Safina Yussupova","Kiana Reader":"Kiana Reader","Ryan H Kim":"Ryan Kim","Alec Mardian":"Alec Mardian","Harmony Covarrubias":"Harmony Covarrubias","David Alexander Hattin":"David Hattin","Zoey Pickens":"Zoey Pickens","Cindy Chang":"Zoey Gould/Maleia Gould","Elisa Huerta":"Elisa Huerta","kgdude":"Kyle Gonzalo","Jason Bone":"Jason Bone","Askhat Sulaimanov":"Askhat Sulaimanov","Cadence Rivera":"Cadence Rivera","James Purdum":"James Purdum","Alyssa Rosales":"Alyssa Rosales","LAUREN HARTMAN":"Abigail Hartman","leela vonderhey":"Leela Von Der Hey","Eliana Grosleib":"Eliana Grosleib","Charlie Pirayoo":"Noah Pirayoo","DividedByZero ":"Harley Amran","Emilya Gregorian":"Emilya Gregorian","J Morales":"Drake Morales","Joe Biundini":"Luma Biundini","Jacob Laus-Luciano":"Jacob Luciano","CAt LiGHt86 g0Ogle":"Dimitri Undorf","flower violets":"Megyn Luce","Alexa Zeytounian":"Alexa Zeytounian/Andrew Zeytounian","The Real Lego Emmett":"Emmett Ford","Native Flamingo":"Milos Saric","MELINEH":"Emanuel Meserkhani","Andrew Ramallo":"AJ Ramallo","Michele Ramos":"Ava Ramos","Sky Ferrero":"Skye Ferrero","Jules Rajagopal":"Adarsh Sarathkumar","Rafaella R":"Luma Biundini","sydney chaparro":"Sydney Chaparro","grace balasian":"Grace Balasian","Fiorella Marrero":"Daniella Marrero","Isabella Marrero":"Bella Marrero","veronica giron":"Lydia Lagunas","EmmaLee Pouncey":"Emma Lee Pouncey/James Pouncey","Levon Zeytounzian":"Shaunt Zeytounzian/Nairi Zeytounzian","Zoey Gold":"Zoey Gould","Iskuhi Ghazaryan":"Daniel Bagumyan","ALEXANDER SAVIN":"Arthur Savin","Zoey Gold":"Zoey Gould","Hermineh Avanesian":"Edlyn Davoodi","Bared Dilacar":"Jakob Dilacar","skye ferrero":"Skye Ferrero","askhat Suliamanov":"Askhat Sulaimanov","Kiki_ Lauren":"Kiana Reader","Juliana Biundini":"Luma Biundini","Pancakes are better than Waffles":"Ava Ramos","a random sableye":"Rafael Sandoval","liana sandoval":"Liana Sandoval","Luba Kofman":"Sadie Kofman","Benjamin Kofman":"Ben Kofman","ella santoro":"Ella Santoro","Adrianna Louise Velarde":"Adrianna Velarde","Cristopher Ong":"Cristopher Ong","JONATHAN ONG":"Jonathan Ong","Blossom ??":"Kaitlyne Arriola","Nico Schntag":"Nicholas Schoentag","marli rickerby":"Marli Rickerby","Athena Karos":"Evy Kleissas","Edna Alvarez Dilaar":"Jakob Dilacar","Sea Bunny \"w\"":"Celine Nguyen","manny flores":"Manuel Flores","Edward Leverett":"Eddie Leverett","Joseph Fernandes":"Joey Fernandes","Mira Hammel":"Mira Kimura","Corgi cookie_YT":"Selma Jacobsen","Tess Reyes":"Hannah Reyes","Hannah Rey":"Hannah Reyes","MARYANN PARONIAN":"Maryann Paronian","Sara Howard":"Evan Howard","MightyGar":"Jacob Bezdjian","anneke pullen":"Anneke Pullen","Molly Sachs":"Bram Sachs","Jenny Raftery":"Tegan Raftery","George Howard":"Marcus Howard/Evan Howard","sandy lizaola":"Gabriella Hernandez","Zaven":"Maryann Paronian","aida esagholi":"Emanuel Meserkhani","Debbie Maddigan":"Ellie Maddigan","Alexis Weiner":"Lily Weiner","Goonklin":"Daniel Ware","Elizabeth Maddigan":"Ellie Maddigan","Todd Kehrli":"Reese Kehrli/Jack Kehrli","Phobia ":"James Purdum","rancid sack":"James Purdum","J Turner":"Jailyn Turner","BeastMaster64":"Nathan Mata","MARCUS HOWARD":"Marcus Howard","CELINE NGUYEN":"Celine Nguyen","Durdana Monessa":"Zuhair Alam","Cheri Kehrli":"Reese Kehrli","Takeover Jayy-_-":"Jayden Hamilton","Ava Ramos - 2007":"Ava Ramos","Tran Chinh":"Anh Le","Cindy Evangelista de leon":"Isabel De Leon","Alessandro Flores":"Alessandro Flores Espitia","anh le":"Anh Le","Isabel Himaya De Leon":"Isabel De Leon","Mahbuba Begum":"Sara Ahamed","petra creque":"Anystejah Phillip","Mikan Tsumiki":"Megyn Luce","Juliana Cho":"Addison Kanda","Marcus Howard":"Marcus Howard/Evan Howard","almond milk":"Elyse Bollesen","Adriana de Higes":"Adriana De Higes","Arman Rostomyan":"Lina Rostomyan","mAtOe rIvErA":"Mateo Rivera","Isaac Amador":"Anthony Amador","Bartels Family":"Charlotte Bartels","dana s.":"Dana Sahagon","aurtiz":"Isabel De Leon","MATEO RIVERA":"Mateo Rivera","Alyssa Azalbarian":"Skye Ferrero","Rafa'ella Howard":"Rafaella Howard","sabrina somani":"Naima Roowala"},
    students:["Abby Hatem", "Adriana Soto", "Alexa Zeytounian", "Andrew Zeytounian", "Anthony Curtis", "Ellie Guerrero", "Emma Lee Pouncey", "Genesis Candelario", "James Pouncey", "Julia Dilacar", "Lauren Chaparro", "Nairi Zeytounzian", "Paola Guerrero", "Shaunt Zeytounzian", "Siena Hatem", "Sofia Sgroi", "Stella Sgroi", "Teagan Hattin", "Jillian Luciano", "Ethan Ramallo", "Ronan Bollesen", "Claira Webber", "Jordan Reed", "Ash Lyone", "Wolfie Ramos", "Nathan Alzaga", "John Lyone", "Logan Polack", "Nina Ireland", "Anthony Canale", "Jaylen Rodriguez", "Clayton Richardson", "Cormac Abaravich", "Sofia Yaghszian", "Briyana Ampie", "Daniel Dang", "Jayden Ahorro", "Sam Hollis", "Caleb Kang", "David Isagulyan", "Jack Kehrli", "Jamison Karp", "Gianni Ortiz", "Charlotte Colman", "Erlinda Rafaella Ruelas-De La Cruz Howard", "David Khudagulian", "Colin Campion", "Max Campion", "Jhiro Demirchyan", "Kira Nafziger", "Eva Pashabezyan", "Daniel Husband", "Sean Cabrera", "Ruby Gamino", "Jenielle Cataluna", "Isabella Bortz", "Rachel Little", "Emma Beck", "Evangeline Chillemi","Nicholas Polster","Mia Heitkam","Karlee Green","Aren Rostomyan","Henry Mnatsakanyan","Parker Moffett","Jordan Steuer","Anthony Amador"],
    nickNames: {"Daniel James Coscia":"DJC","Andrew Ramallo":"AJR","Celine Nguyen":"Celine","Ian Kang":"Iank","Charnnont Phivnil":"Charnnont","Gabriella Hernandes":"Gaby","Alexis Kulinski":"Alexisk"},
    matchName: function(name)
    {
        return this.nameMatch[name.replace(/[^\x20-\x7F]/g, "")];
    },
    isMod: function(u)
    {
        if(typeof u == "object")
            return this.modsList.includes(u.id)||u.id == "1205645";
        if(typeof u == "string")
            return this.modNames.includes(u.toLowerCase().replace(/[ _]/g,""));
        return false;
    },
    isTutor: function(u)
    {
        if(typeof u == "object")
            return this.modsList.includes(u.id)&&!u.id.match(/[0-9]595782/);
        if(typeof u == "string")
            return this.modNames.includes(u.toLowerCase().replace(/[ _]/g,""))&&u.indexOf("Table 9")==-1&&u.indexOf("Mathnasium@Home")==-1;
        return false;
    },
    isOnline: function(u)
    {
        if(typeof u == "object")
            return u.isOnline;
        if(typeof u == "string")
            return !!Array.from(document.getElementsByClassName("classroom-user-info")).filter(c => c.title.indexOf(u)>-1 && c.title.indexOf(" is online")>-1).length;
        return false;
    },
    getAltNames: function(u)
    {
        function unspace(name)
        {
            name = name.split(" ");
            if(name[1])return name[0] + name[1][0];
            return name[0];
        }
        var names = {main:unspace(u.name),full:u.name}, match = this.matchName(u.name);
        if(match)
        {
            match = match.split("/");
            names.main = unspace(match[0]);
            names.full = match[0];
            if(match[1])names.sibling = unspace(match[1]);
            var nick = this.nickNames[match[0]];
            if(nick) names.mainnick = nick;
            if(match[1]){
                nick = this.nickNames[match[1]];
                if(nick) names.siblingnick = nick;
            }
        }
        return names;
    },
    inWaitingRoom: function(u)
    {
        return u.room&&!!window.breakoutRooms.filter(r=>r.id==u.room&&r.name.replace(/\ +/,"").toLowerCase()=="waitroom").length;
    },
    getRoom: function(u)
    {
        if(!u.room)return null;
        return window.breakoutRooms.filter(r => r.id == u.room)[0]
    },
}
var allNames = Object.keys(window.userInfo.nameMatch);
var stNames = {};
for(var i = allNames.length - 1; i >= 0; i--)
{
    var s = window.userInfo.nameMatch[allNames[i]].split("/");
    if(!window.userInfo.students.includes(s[0]))window.userInfo.students.push(s[0]);
    if(s[1]&&!window.userInfo.students.includes(s[1]))window.userInfo.students.push(s[1]);
}

var AlertBox = {
    alertelement: null,
    alertkey: 0,
    cancel: function(key)
    {
        if(key && key != this.alertkey)return true;
        if(this.alertelement)this.alertelement.remove();
        if(this.interval)clearInterval(this.interval);
        this.interval = 0;
        this.alertkey = null;
    },
    interval: 0,
    open: function(msg, key)
    {
        var self = this;
        var removal = function(){
            if(self.alertelement)self.alertelement.remove();
            if(self.interval)clearInterval(self.interval);
            self.interval = 0;
            self.alertkey = null;
        }
        if(key && key == this.alertkey) return;
        removal();
        this.alertkey = key;
        var width = 500;
        var container = document.createElement("div");

        var p = document.createElement("div");
        p.style = "position:absolute;top:120px;width:"+width+"px;color:white;font-weight:bold;background:red;z-index:10000000;padding:6px;border:1px solid grey;text-align:center;box-shadow:5px 10px #00000040;font-size:24pt";
        p.innerHTML = msg;
        p.onclick = removal;
        p.style.left = (window.innerWidth/2 - width/2) + "px";
        p.id = "customalertbox";
        var d = document.createElement("div");
        d.style = "position:absolute;left:0px;top:0px;width:100%;height:100%;z-index:9999999;background:rgba(255,255,255,0.3)";
        d.onclick = function(e){e.target.remove()};
        d.id = "customalertboxbg";
        container.appendChild(d);
        container.appendChild(p);
        document.body.appendChild(container);
        this.alertelement = container;
        this.interval = setInterval(function(){
            var p = document.getElementById("customalertbox");
            var d = document.getElementById("customalertboxbg");
            if(p.style.background == "red")
                p.style.background = "white", p.style.color = "red", (d?d.style.background = "rgba(255,0,0,0.3)":0);
            else
                p.style.background = "red", p.style.color = "white", (d?d.style.background = "rgba(255,255,255,0.3)":0);
        }, 700);
    }
}

function speak(s){if(!window.mod.listener||window.flipnameflag)return ;let u = new SpeechSynthesisUtterance(s);u.volume = 0.4;speechSynthesis.speak(u);console.log("Speaking:",s)};
function Alerter(key, msg, startInterval, conditionCheck)
{
    this.msg = msg;
    this.key = key;
    this.interval = startInterval;
    this.condition = conditionCheck;
    this.lastState = false;
    this.on = false;
    this.timerActive = false;
    this.lastSwitch = Date.now();
    this.onalert = function(){};
    var self = this;
    setInterval(function(){self.update()},500);
}
Alerter.prototype.repeatInterval = 60*1000;
Alerter.prototype.update = function()
{
    var timer = Date.now();
    var condition = !this.condition();
    var conditionup = !this.lastState && condition;
    var conditiondown = this.lastState && !condition;
    if(conditiondown && this.on)
        this.on = false, AlertBox.cancel(this.key);
    if(conditionup && !this.on)
        this.on = true, this.lastSwitch = timer + this.interval;
    var timerexpired = this.lastSwitch < timer && this.on;
    if(timerexpired)
        AlertBox.open(this.msg, this.key), this.lastSwitch = timer + this.repeatInterval, this.onalert(), speak(this.msg);
    this.lastState = condition;
}
function TimeReader(str)
{
    if(typeof str == "string")
    {
        str = str.toUpperCase().replace(/\ +/g, "");
        if(!str.match(/[0-9][0-9]?:?[0-9][0-9]/))
            var colloc, hr, min;
        if(str.indexOf(":")!=-1)
        {
            colloc = str.indexOf(":"), hr = parseInt(str.substr(0,colloc)), min = parseInt(str.substr(colloc+1,colloc+3));
        }
        else
        {
            colloc = str.match(/[0-9]+/g)[0].length - 2, hr = parseInt(str.substr(0,colloc)), min = parseInt(str.substr(colloc,colloc+2));
        }
        if((hr < 9 && str[0]!="0" && str.indexOf("AM")==-1)||str.indexOf("PM")!=-1)hr+=12;
        this.isPM = hr > 11;
        var hr24 = hr;
        if(this.isPM && hr > 12)hr-=12;
        this.h12String = hr + ":" + (min<10?"0"+min:min) + " " + (this.isPM ? "PM" : "AM");
        this.h24String = (hr24<10?"0"+hr24:hr24) + ":" + (min<10?"0"+min:min);
        this.date = new Date();
        this.date.setHours(hr24);
        this.date.setMinutes(min);
        this.date.setSeconds(0);
        this.date.setMilliseconds(0);
        this.dateNumber = this.date.getTime();
    }
    else if(typeof str == "number")
    {
        this.date = new Date();
        this.date.setTime(str);
        this.dateNumber = this.date.getTime();
    }
    else if(typeof str == "object" && str instanceof Date)
    {
        this.date = str;
        this.dateNumber = this.date.getTime();

    }
    else if(!str)
    {
        this.date = new Date();
        this.date.setTime(Date.now());
        this.dateNumber = this.date.getTime();
    }
    this.minutes = this.date.getMinutes();
    this.formattedMinutes = (this.minutes < 10 ? "0" + this.minutes : this.minutes);
    this.hours24 = this.date.getHours();
    this.hours12 = (this.hours24 > 12 ? this.hours24 - 12 : this.hours24);
    this.formattedHours = (this.hours24 < 10 ? "0" + this.hours24 : this.hours24);
    this.isPM = this.hours24 > 11;
    this.isSaturday = this.date.day == 6;
}
TimeReader.prototype.compare = function(time)
{
    var tm = time;
    if(typeof time == "object")tm = time.dateNumber;
    return (this.dateNumber < tm ? -1 : (this.dateNumber > tm ? 1 : 0));
}
TimeReader.prototype.isLess = function(time)
{
    return this.compare(time) == -1;
}
TimeReader.prototype.isGreater = function(time)
{
    return this.compare(time) == 1;
}
TimeReader.prototype.isEqual = function(time)
{
    return this.compare(time) == 0;
}
TimeReader.prototype.getString = function()
{
    if(this.hours24 < 14) return this.formattedHours + ":" + this.formattedMinutes;
    else return this.hours12 + ":" + this.formattedMinutes;
}
TimeReader.prototype.getMSElapsed = function()
{
    return Date.now() - this.dateNumber;
}
TimeReader.prototype.getSecondsElapsed = function()
{
    return this.getMSElapsed()/1000;
}
TimeReader.prototype.getMinutesElapsed = function()
{
    return this.getMSElapsed()/60000;
}
TimeReader.prototype.getHoursElapsed = function()
{
    return this.getMSElapsed()/3600000;
}
TimeReader.prototype.isPassed = function()
{
    return Date.now() > this.dateNumber;
}
TimeReader.prototype.getTime = function()
{
    return this.dateNumber;
}
function RoomMetric(rm)
{
    if(typeof rm == "string")
        this.name = rm, this.ref = "string";
    else if(rm.className && rm.className == "breakout-room")
    {
        this.ref = "div";
        this.name = rm.getElementsByClassName("breakout-room-title")[0].innerHTML;
        this.users = Array.from(rm.getElementsByClassName("classroom-user-name")).map(p => p.innerHTML);
        button = rm.getElementsByClassName("classroom-user-button");
        this.entryButton = (button ? button[0] : {click:function(){}});
    }
    else
    {
        this.ref = "object";
        this.name = rm.name;
        this.id = rm.id;
        this.pad = rm.pad;
        if(window.participants) this.users = window.participants.filter(p => p.room == rm.id);
    }
	this.lowerCaseName = this.name.toLowerCase();
    this.filteredName = this.lowerCaseName.replace(/\ +/g,"");
    this.upperCaseName = this.name.toUpperCase();
    if(this.isStudentRoom())
    {
        this.nameGroups = this.name.match(this.validator);
        this.time = new TimeReader(this.nameGroups[1]);
        this.is2Hour = !!this.filteredName.match(/2h(ou)?r/g);
        this.firstTable = this.nameGroups[2];
        this.secondTable = this.nameGroups[3];
        this.lastTable = this.secondTable||this.firstTable;
        this.isSecondTable = !!this.secondTable;
        this.tableString = this.firstTable + (this.secondTable ? "/" + this.secondTable : "");
        this.student = this.nameGroups[4];
        this.firstTableEndTime = new TimeReader(this.time.dateNumber + (((60<<this.is2Hour)*60*1000)>>this.isSecondTable));
        this.firstTableStartTime = this.time;
        this.secondTableEndTime = new TimeReader(this.time.dateNumber + (60<<this.is2Hour)*60*1000);
        this.secondTableStartTime = this.firstTableEndTime;
        this.endTime = this.secondTableEndTime;
    }
}
RoomMetric.prototype.validator = new RegExp('([0-9][0-9]?:[0-9][0-9])[ ]*(T[0-9][0-9]?)/?(T[0-9][0-9]?)?[ ]*([A-Za-z]*)','');
RoomMetric.prototype.otherRoomNames = ["wait room","break room"];
RoomMetric.prototype.isNoShow = function()
{
    return this.upperCaseName.indexOf("NO SHOW") != -1;
}
RoomMetric.prototype.isValid = function()
{
    return this.isActiveRoom()||this.otherRoomNames.includes(this.lowerCaseName);
}
RoomMetric.prototype.isStudentRoom = function()
{
    return !!this.name.match(this.validator);
}
RoomMetric.prototype.isActiveRoom = function()
{
    return this.isStudentRoom()&&!this.isNoShow();
}
RoomMetric.prototype.getName = function()
{
    if(this.isStudentRoom())
        return (this.isNoShow()?"NO SHOW ":"") + this.time.getString() + " " + this.tableString + " " + this.student + (this.is2Hour ? " (<u>2 HR</u>) " : "");
    else
        return this.name;
}
RoomMetric.prototype.getSimpleName = function()
{
    if(this.isStudentRoom())
        return this.time.getString() + " " + this.student;
    else
        return this.name;
}
RoomMetric.prototype.isExpired = function()
{
    return this.isActiveRoom()&&(this.time.getHoursElapsed() > (1 << this.is2Hour));
}
RoomMetric.prototype.getCurrentTable = function()
{
    var t = Date.now();
    if(!this.isStudentRoom())
        return null;
    if(this.secondTableStartTime.isLess(t) && this.isSecondTable)
        return this.secondTable;
    return this.firstTable;
}
RoomMetric.prototype.hasStudents = function()
{
    if(!this.users)
        return null;
    if(!this.users.filter(u => !window.userInfo.isMod(u)).length)
        return false;
    return true;
}
RoomMetric.prototype.hasStudentsOnline = function()
{
    if(!this.users)
        return null;
    if(!this.users.filter(u => !window.userInfo.isMod(u) && window.userInfo.isOnline(u)).length)
        return false;
    return true;
}
RoomMetric.prototype.hasTutor = function()
{
    if(!this.users)
        return null;
    if(!this.users.filter(u => window.userInfo.isTutor(u)).length)
        return false;
    return true;
}
function UserMetric(u)
{
    if(u.className && u.className == "classroom-user-info")
    {
        this.ref = "div";
        this.name = u.getElementsByClassName("classroom-user-name")[0].innerText;
        this.isOnline = u.title.indexOf("is online") != -1;
        var breakoutRoom = u.parentNode.parentNode.parentNode.parentNode;
        this.roomName = null;
        if(breakoutRoom.className == "breakout-room")
            this.roomName = breakoutRoom.getElementsByClassName("breakout-room-title")[0].innerText;
        this.isMod = window.userInfo.modNames.includes(this.name.toLowerCase().replace(/[ _]/g,""));
        this.timeOnline = u.getElementsByClassName("classroom-user-wait-time")[0].innerText
    }
    else
    {
        this.ref = "object";
        this.name = u.name;
        this.id = u.id;
        this.room = u.room;
        if(u.room)this.roomName = window.breakoutRooms.filter(r => r.id == u.room)[0].name;
        this.isOnline = u.isOnline;
        this.isMod = window.userInfo.modsList.includes(u.id)||u.id == "1205645";
    }
}
UserMetric.prototype.inWaitingRoom = function()
{
    if(this.roomName && this.roomName.toLowerCase().replace(/\ +/,"") == "waitroom")
        return true;
    return false;
}
UserMetric.prototype.getTableNumber = function()
{
    var mod = modInfo[this.name.toLowerCase().replace(/[^0-9A-Za-z]/g,"")];
    if(!mod)return false;
    return mod.tnum;
}
function getUsers(chooseDOM)
{
    if(window.participants&&!chooseDOM)
    {
        return window.participants.map(r => new UserMetric(r));
    }
    else
    {
        return Array.from(document.getElementsByClassName("classroom-user-info")).map(r => new UserMetric(r));
    }
}
function getRooms(chooseDOM)
{
    if(window.breakoutRooms&&!chooseDOM)
    {
        return window.breakoutRooms.map(r => new RoomMetric(r));
    }
    else
    {
        return Array.from(document.getElementsByClassName("breakout-room")).map(r => new RoomMetric(r));
    }
}
function getCurrentRoom()
{
    var titleEle = document.getElementById("breakout-room-banner");
    var pad = document.getElementById("pad-frame");
    return {name: titleEle&&titleEle.innerHTML.replace("You are in Breakout Room:  ", ""), pad: pad&&pad.src};
}
function getPages(){
    var pagesGroup = new RegExp('[0-9][0-9]?:[0-9][0-9][ ]*T[0-9][0-9]?/?(T[0-9][0-9]?)?[ ]*[A-Za-z]*(.*)','');
    var pages = decodeURI(window.location.href.substring(window.location.href.indexOf("&room=")+6)).match(pagesGroup);
    if(!pages||!pages[2])return [];
    pages = pages[2];
    var plist = pages.substring(pages.indexOf("(")+1).replace(/#[0-9][0-9]?/g,"").replace(/2[ ]*[Hh]/g,"").replace(/\ +/g,",").replace(/[^0-9(\-~,]/gi,"").replace(/\(/g,",").split(","), pgs=[];
    plist.forEach(function(pg){
        if(pg.length == 0)
            return;
        if(pg[0]=="~")
        {
            var spg = parseInt(pg.substring(1));
            pgs.push(spg,spg+1,spg+2,spg+3,spg+4);
        }
        else if(pg.indexOf("-")!=-1)
        {
            var pgline = pg.split("-");
            var spg = parseInt(pgline[0]);
            var epg = parseInt(pgline[1]);
            for(var i = spg; i <= epg; i++)
                pgs.push(i);
        }
        else
        {
            pgs.push(parseInt(pg));
        }
    });
    pgs = pgs.filter((a,i)=>a<200&&i<20);
    return pgs;
};
window.utils = {
    getRooms: getRooms,
    getUsers: getUsers,
    UserMetric, UserMetric,
    RoomMetric: RoomMetric,
    TimeReader: TimeReader,
    Alerter: Alerter,
    getCurrentRoom: getCurrentRoom,
    getPages: getPages,
}
function loadStableScript()
{
  var s = document.createElement("script");
  s.src = window.stableSource;
  document.body.appendChild(s);
}
Array.from(document.querySelectorAll('script')).forEach(s => {
        if (s.src && (s.src.indexOf("client/js/app-") !== -1)) {
            if(window.disconnectObserver)window.disconnectObserver();
            document.getElementById("tool-hints-modal").outerHTML = "<div id=\"tool-hints-modal\" style=\"display: flex;\" onclick=\"window.changeScriptAllowance();window.location.reload();\"><i class=\"far fa-3x\" style=\"color:green;font-weight:bold;font-size:56px\">✓</i></div>"
   setTimeout(function(){document.getElementById("tool-hints-modal").outerHTML = "<div id=\"tool-hints-modal\" style=\"display: flex;\" onclick=\"window.changeScriptAllowance();window.location.reload()\"><i class=\"far fa-3x\" style=\"color:green;font-weight:bold;font-size:56px\">✓</i></div>"},5000);
        }
});

if(window.stableSource)window.unstableScript = window.stableSource.indexOf(wbClient) < 0;

if(window.unstableScript)
{
   document.getElementById("tool-hints-modal").outerHTML = "<div id=\"tool-hints-modal\" style=\"display: flex;\" onclick=\"window.changeScriptAllowance();window.location.reload();\"><i class=\"far fa-3x\" style=\"color:red;font-weight:bold;font-size:56px\">X</i></div>"
   setTimeout(function(){document.getElementById("tool-hints-modal").outerHTML = "<div id=\"tool-hints-modal\" style=\"display: flex;\" onclick=\"window.changeScriptAllowance();window.location.reload()\"><i class=\"far fa-3x\" style=\"color:red;font-weight:bold;font-size:56px\">X</i></div>"},5000);
}
if(window.scriptLoaded)wb();
else loadStableScript();

window.onbeforeunload = function(){
    if(window.openclonewindows)window.openclonewindows.forEach(function(w){w.close()});
}

var currentName = window.location.href.split("&").filter(t=>t.indexOf("fullname")!=-1)[0].split("=")[1].toLowerCase().replace(/%[A-Za-z0-9][A-Za-z0-9]/g,"").replace(/[^0-9A-Za-z]/g,"");
console.log(currentName);
if(window.injak)currentName = window.injak;
if(!modInfo[currentName])currentName = 'default';
window.mod = modInfo[currentName];
console.log(window.mod);
window.modsList = window.userInfo.modsList;
window.pageLoaded = false;
window.firstTime = true;
window.calcToolFocus = false;
window.smileyStamp = "😃";
window.unstableScript = false;
window.altcheck = true;
window.useAltColor = true;
window.sf = 2.3;
window.showCtrls = true;

window.modKeys = window.mod.tnum == "T5";

window.showCalc = window.mod.incenter;
window.showSave = window.mod.incenter;
window.themeColor2 = (window.mod.incenter?"#444444":false);

window.initializedLocals = false;
window.lastReloadTimer = 0;



/*
pi:  π
theta:  θ
sigma:  Σ
<=:  ≤
>=:  ≥
~=:  ≈
=:  ≠
rad:  √
pm:  ±
div:  ÷
cdot:  ·
times:  ×
infty:  ∞
cents:  ¢
deg:  °
A^x, A^{abc}:  Aˣ, Aᵃᵇᶜ
A_x, A_{123}:  Aₓ, A₁₂₃
*/

console.log("Script initiated");

0;
function putToolHints()
{
    if(!document.getElementById("tool-hints"))
    {
        setTimeout(putToolHints,2000);
        return;
    }
    document.getElementById("tool-hints").style.height="600px";
    document.getElementById("tool-hints").innerHTML+="<section><div id='tool-hint-title'><br>Math Shortcuts</div><div id='tool-hint-shortcut'>Start text with a '!'</div><div id='tool-hint-shortcut'></div><div id='tool-hint-shortcut'>Greek - pi: π, theta: θ, sigma: Σ</div><div id='tool-hint-shortcut'>Equality - <=: ≤, >=: ≥, ~=: ≈, /=: ≠</div><div id='tool-hint-shortcut'>Operators - rad: √, pm: ±, div: ÷, cdot: ·, times: ×</div><div id='tool-hint-shortcut'>Misc. - infty: ∞, cents: ¢, deg: °</div><div id='tool-hint-shortcut'>Exponents - A^x, A^{abc}: Aˣ, Aᵃᵇᶜ</div><div id='tool-hint-shortcut'>Subscripts - A_x, A_{123}: Aₓ, A₁₂₃</div><div id='tool-hint-shortcut'>Fractions - {a/b}: a/b</div><div id='tool-hint-shortcut'>grid: Makes a table</div><div id='tool-hint-shortcut'>nline: Makes a number line</div></section>";
}
putToolHints();


function getUnsigned()
{
    var unsignedPages = [];
    for(var p = 0; p < paper.project.layers.length; p++)
    {
        if(paper.project.layers["page-"+p].getItems({class:paper.PointText}).filter(function(c)
                                                                                    {
            return c.content.match(/[A-Za-z][ ]*[A-Za-z][ ]*[0-9][ ]*\/[ ]*[0-9]*/) && window.modsList.filter(function(n){return c._name.indexOf(n)!=-1}).length>0;
        }).length == 0)
            unsignedPages.push(p+1);
    }
    return unsignedPages;
}

(function() {
    if(window.location.href.indexOf(".craniumcafe.com/meetings/")==-1)return;
    var closeAt = new TimeReader("10:15 PM");
    window.themeBG = (window.mod.tnum=="T5"?"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNlgxZyXTtRXGNjVreAwimvdV5aMSLXQxAPAtt7krTIE0DNoKE&usqp=CAU":"");
    window.themeColor = (window.mod.tnum=="T5"?"#243":"");
    window.closemic = false;
    window.clickables = [];
    window.table8 = window.location.href.replace(/(userid\=)[0-9]+/g,'$18209357').replace(/(fullname\=[^&]*)/g,'fullname=Mathnasium&logger=1').replace(/\&role\=[a-z]*/g,"&role=guest").replace(/avatar\_url\=[^&]*/g,"avatar_url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F953001413021351936%2F8J8DnHND_400x400.jpg");

    window.summa = [window.location.href.replace(/(userid\=)[0-9]/g,'$12').replace(/(fullname\=[^&]*)/g,'$1_&bot=1'),window.location.href.replace(/(userid\=)[0-9]/g,'$13').replace(/(fullname\=[^&]*)/g,'$1_&bot=1')];
    if(window.mod.extraTables)
    {
        window.summa = window.mod.extraTables.map(id=> window.location.href.replace(/(userid\=)[0-9]*/g,"$1"+id).replace(/(fullname\=[^&]*)/g,'$1_&bot=1'));
    }
    window.summal = 0;
    window.openclonewindows = [];
    window.previouslyOnline = [];
    window.lastCheckIn = {};
    window.onmastertutorlist = false;
    window.hideTutorEle = !window.mod.hasTable8;
    window.flipnameflag = false;
    window.ticker = 0;
    if(window.location.href.indexOf("bot=1") != -1)window.flipnameflag = true;
    window.holdSrc = "";
    var unseenStudentAlertTime = 6;
    var seenStudentAlertTime = 11;
    var alerters = [];


    window.populate = function(){
        var rms = window.utils.getRooms(true).map(r => r.name);
        var wbs = Object.keys(window.WBList), selections = "";
        wbs.sort();
        wbs.forEach(w => {
            var title = (new RoomMetric(w)).getName();
            if(!rms.filter(r => w.indexOf(r)>-1).length)return;
            var pad = document.getElementById("pad-frame");
            var wb = window.WBList[w];
            var matchPad = pad && wb.split("?")[0] == pad.src.split("?")[0];
            selections += "<option value = '" + wb + "' "+ (matchPad ? "selected='selected'" : "") +">" + title + "</option>";
        });
        if(window.mod.super)selections += "<option value='https://draw-lb.craniumcafe.com/d/d691094b-e43a-419a-8332-2aec702b3bbb?uid=1209357&fullname=Table+5&owner_userid=1209357&meeting_id=4002502&room_title=blank&no_wrapper=0&m=1&allow_lock=0&allow_close=1&f='>Scratch Paper</option>";
        document.getElementById("split-whiteboard-sel1").innerHTML = selections;
    };
    window.openWB = function()
    {
        var sel = document.getElementById("split-whiteboard-sel1");
        var src = sel.options[sel.selectedIndex].value;
        var w = window.open(src,"_blank");
        w.blur();
        window.focus();
    };
    window.updatePadLists = function()
    {
        var wbrows = Array.from(document.getElementsByClassName("wbrow"));
        wbrows.forEach(d => {
            tx = d.getElementsByTagName("input")[0];
            opt = d.getElementsByClassName("wbrow-select")[0];
            var opname = opt.dataset.roomname.toLowerCase().split(" ")[2];
            if(tx.value) opname = tx.value;
            var p = window.pads.filter(function(b){ return b.padName.toLowerCase().indexOf(opname)!=-1});
            opt.innerHTML = "";
            p.forEach(pad=>{
                var choice = document.createElement("option");
                choice.value = pad.padGroupId;
                choice.innerText = pad.padName;
                opt.appendChild(choice);
            });
            var nochoice = document.createElement("option");
            nochoice.value = 0;
            nochoice.innerText = "None";
            opt.appendChild(nochoice);
        });
    }
    window.openWBFrame = function()
    {
        var wbcont = document.getElementById("openWB-whiteboard-menu");
        wbcont.style.display = "";
        var wbrows = document.getElementById("openwbrows");
        wbrows.innerHTML = "";
        var unpadRooms = window.breakoutRooms.filter(r=>{
            return !r.pad && r.name.match(/[0-9]?[0-9]:[0-9][0-9][ ]*T/);
        });
        unpadRooms.forEach(r=>{
            var ndiv = document.createElement("div");
            ndiv.innerHTML += "<br>" + r.name + "<br><br>";
            var opt = document.createElement("select");
            var ref = document.createElement("input");
            ref.onchange = window.updatePadLists;
            ndiv.appendChild(ref);
            ndiv.appendChild(document.createElement("br"));
            ndiv.appendChild(opt);
            ndiv.appendChild(document.createElement("br"));
            ndiv.style.borderBottom = "1px dotted black";
            ndiv.className = "wbrow";
            opt.dataset.roomid = r.id;
            opt.dataset.roomname = r.name;
            opt.className = "wbrow-select";
            opt.style.fontSize = "20px";
            wbrows.appendChild(ndiv);
        });
        window.updatePadLists();
    };
    window.openWBAll = function()
    {
        var wbrows = Array.from(document.getElementsByClassName("wbrow"));
        wbrows.forEach(o=>{
            o = o.getElementsByTagName("select")[0];
            var sel = o[o.selectedIndex];
            var room = o.dataset.roomid;
            if(sel.value != 0)
            {
                window.openBoard(sel.value,sel.innerText,room);
            }
        });
        var wbcont = document.getElementById("openWB-whiteboard-menu");
        wbcont.style.display = "none";
    };
    var undeletedStack = [];
    window.undeleteRooms = function()
    {
        var ndiv = window.promptBox("",function(){
            var o = document.getElementById("custompromptbox").getElementsByTagName("select")[0];
            var sel = o[o.selectedIndex];
            window.addRoom(sel.innerText);
            undeletedStack.push({e:sel.value.split("@@@@")[0],t:sel.value.split("@@@@")[1],n:sel.innerText});
            console.log(undeletedStack);
            setTimeout(function()
                       {
                undeletedStack.forEach(s=>{var b = window.breakoutRooms.filter(r=>r.name==s.n);if(b.length > 0)window.openBoard(s.e,s.t,b[0].id)});
            },1000);
        });
        ndiv.innerHTML = "Undelete Rooms: <br><br>";
        var opt = document.createElement("select");
        ndiv.appendChild(document.createElement("br"));
        ndiv.appendChild(opt);
        ndiv.appendChild(document.createElement("br"));
        opt.style.fontSize = "20px";
        var opened = Object.keys(window.openedRooms);
        opened.sort((a,b)=>(a<b)*2 - 1);
        opened.forEach(r =>
                       {
            if(!window.breakoutRooms.filter(r2=>r2.id==window.openedRooms[r].id).length)
            {
                var choice = document.createElement("option");
                if(window.openedRooms[r].pad)choice.value = window.openedRooms[r].pad.padGroupId + "@@@@" + window.openedRooms[r].pad.padName;
                choice.innerText = r;
                opt.appendChild(choice);
            }
        });
    };
    window.roomWBPrompt = function()
    {
        var r = window.breakoutRooms.filter(function(b){ return b.id==window.currentBreakoutRoom.id });
        if(r.length == 1)
        {
            r = r[0];
            var wbrows = window.promptBox("<div id='custompromptroomopt'>" + r.name + "</div><br><br><br><input onchange='window.updatePadLists()'></input>",function(){
                var o = document.getElementById("wbrow-select");
                var sel = o[o.selectedIndex];
                var room = o.dataset.roomid;
                var er = document.getElementById("extraroomoption");
                if(er)
                {
                    room = er[er.selectedIndex].value;
                }
                if(sel.value != 0)
                {
                    window.openBoard(sel.value,sel.innerText,room);
                }
            });
            var nameBox = document.getElementById("custompromptroomopt");
            nameBox.onclick = function(e)
            {
                this.innerText = "";
                var opt2 = document.createElement("select");
                opt2.id = "extraroomoption";
                opt2.onchange = function()
                {
                    var wbr = document.getElementById("wbrow-select");
                    wbr.dataset.roomname = this[this.selectedIndex].innerText;
                    wbr.dataset.roomid = this[this.selectedIndex].value;
                    window.updatePadLists();
                };
                this.appendChild(opt2);
                this.onclick = function(){};
                window.utils.getRooms().forEach(r => {
                    if(r.isStudentRoom())
                    {
                        var s = document.createElement("option");
                        s.value = r.id;
                        s.innerText = r.name;
                        opt2.appendChild(s);
                    }
                });
                window.updatePadLists();
            }
            var ndiv = wbrows;
            var opt = document.createElement("select");
            opt.className = "wbrow-select";
            opt.id = "wbrow-select";
            ndiv.appendChild(opt);
            ndiv.appendChild(document.createElement("br"));
            ndiv.className = "wbrow";
            opt.dataset.roomid = r.id;
            opt.dataset.roomname = r.name;
            opt.style.fontSize = "20px";
            var bb = document.createElement("input");
            bb.placeholder = "Paste padlist here";
            bb.onpaste = function()
            {
                var self = this;
                setTimeout(function(){window.updatePads(self.value);self.value = "Accepted!";self.disabled = true;window.updatePadLists()},400);
            }
            if(window.mod.tnum=="T5")
                ndiv.appendChild(bb);
            window.updatePadLists();
        }
    };
    var prevSrc = "";
    if(window.location.href.indexOf("logger=1")!=-1)
        return;
    'use strict';
    var setupped = false;
    var setThemes = false;
    function inlVar()
    {
        if(document.getElementsByClassName("breakout-room").length == 0)return window.setTimeout(inlVar,100);
        inlVar2();
    }
    function inlVar2()
    {
        var date = new Date();
        if(!localStorage.getItem("cdate180321") || localStorage.getItem("cdate180321") != ((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()))
        {
        	localStorage.setItem("cdate180321", ((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()));
            localStorage.setItem("lastchkin","{}");
            localStorage.setItem("wblist","{}");
            localStorage.setItem("seenlist","{}");
            localStorage.setItem("previouslyonline","[]");
            localStorage.setItem("tablesonline","{}");
            localStorage.setItem("hidetutors",""+(!window.mod.hasTable8));
            localStorage.setItem("openedrooms","{}");
            window.lastCheckIn = JSON.parse(localStorage.getItem("lastchkin"));
            window.seenList = JSON.parse(localStorage.getItem("seenlist"));
            window.previouslyOnline = JSON.parse(localStorage.getItem("previouslyonline"));
            window.tablesOnline = JSON.parse(localStorage.getItem("tablesonline"));
            window.WBList = JSON.parse(localStorage.getItem("wblist"));
            window.openedRooms = JSON.parse(localStorage.getItem("openedrooms"));
            window.hideTutorEle = localStorage.getItem("hidetutors")=="true";
            Array.prototype.slice.call(document.getElementsByClassName("breakout-room")).filter(n=>n.getElementsByClassName("breakout-room-title")[0].innerHTML.toLowerCase().indexOf("wait room") != -1)[0].getElementsByClassName("classroom-user-button")[0].click();
        }
        window.initializedLocals = true;
    }
    function setTheme()
    {
        if(!document.getElementById("cafe-streams")) return false;
        if(window.themeBG)document.getElementById("cafe-streams").style.background = "url('"+window.themeBG+"') repeat";
        return true;
    }
    function setups()
    {
        var openWBFrame = document.createElement("div");
        openWBFrame.style = "position:absolute;left:0;right:0;top:0;bottom:0;margin:0 20vh;display:none";
        openWBFrame.id = "openWB-whiteboard-menu";
        var modalFrame = document.createElement("div");
        modalFrame.style = "position:absolute;left:0;right:0;top:0;bottom:0;margin:0 20vh;display:none";
        modalFrame.id = "split-whiteboard-menu";
        modalFrame.innerHTML = "<div tabindex=\"-1\" class=\"modal-box\" id=\"split-whiteboard-dialog\">\n<div class=\"modal-header\">\n<h1 class=\"modal-title\">Split Whiteboards</h1>\n<button aria-label=\"Click to close this window\" type=\"button\" aria-keyshortcuts=\"esc\" class=\"modal-close\" onmouseup=\"document.getElementById('split-whiteboard-menu').style.display='none'\">\n<i class=\"fa fa-remove fa-lg\"></i></button></div>\n<div class=\"modal-content\">\n<div class=\"document-library\">\n<div role=\"tabpanel\" class=\"document-library-content\">\n<div class=\"library-header-container\"><div class=\"library-header\"><span>Open Whiteboard</span> </div></div>\n<div style=\"width:500px\"><button class=\"document-option-button\" title=\"Open all whiteboards\" onmouseup=\"window.openWB()\"><i class=\"fa fa-edit\"></i>Open</button></br></br>\n<select id=\"split-whiteboard-sel1\" multiple size=\"20\" ondblclick=\"window.openWB()\">\n</select>\n</div>\n<br><div></div></div></div></div></div></div><div class=\"modal-backdrop\"  onmouseup=\"document.getElementById('split-whiteboard-menu').style.display='none'\"></div>";
        openWBFrame.innerHTML = "<div tabindex=\"-1\" class=\"modal-box\" id=\"openWB-whiteboard-dialog\">\n<div class=\"modal-header\">\n<h1 class=\"modal-title\">Open All Whiteboards</h1>\n<button aria-label=\"Click to close this window\" type=\"button\" aria-keyshortcuts=\"esc\" class=\"modal-close\" onmouseup=\"document.getElementById('openWB-whiteboard-menu').style.display='none'\">\n<i class=\"fa fa-remove fa-lg\"></i></button></div>\n<div class=\"modal-content\">\n<div id = \"openwbrows\" style=\"text-align:left;font-size:20px\">\n</div>\n<button class=\"document-option-button\" title=\"Open all whiteboards\" onmouseup=\"window.openWBAll()\"><i class=\"fa fa-edit\"></i>Open</button>\n</div></div><div class=\"modal-backdrop\" ></div>";
        modalFrame.style.display = "none";
        document.getElementById("cafe-content").appendChild(modalFrame);
        document.getElementById("cafe-content").appendChild(openWBFrame);
        var specialButtons = document.getElementById("meeting-invite-button");
        specialButtons.outerHTML = "<button id=\"split-whiteboards\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.populate();var d = document.getElementById('split-whiteboard-menu');d.style.display = (d.style.display=='none'?'':'none');\"><i class=\"fa fa-th-large\"></i>Split Whiteboards</button>";
        specialButtons = document.getElementById("split-whiteboards");
        if(window.mod.tnum == "T5") specialButtons.style.display = "none";
        if((window.mod.hasTable8 || window.mod.ismaster) && !window.flipnameflag)specialButtons.outerHTML += "<button id=\"down-timesheet\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.openStudentPage()\"><i class=\"fa fa-link\"></i>View Timesheet</button>";
        if(window.flipnameflag)specialButtons.outerHTML = "";
        var cloneButtons = document.getElementById("shortcuts-button");
        if(window.breakoutRooms && !window.flipnameflag)cloneButtons.outerHTML = (window.mod.extraTables?"<button id=\"clone-self\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.closemic=true;window.open(window.summa[window.summal++],'_blank')\"><i class=\"fa fa-keyboard-o\"></i>Clone</button> <button id=\"clone-self\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.closemic=true;window.summa.forEach((c,i)=>window.openclonewindows[i]=window.open(c,'_blank'))\"><i class=\"fa fa-keyboard-o\"></i>Open All Clones</button>":"")+" <button id=\"add-all-rooms\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.makeRoomsFromExcel()\"><i class=\"fa fa-keyboard-o\"></i><span id = \"nroomamount\" >Add Rooms</div></button> <button id=\"open-a-whiteboard\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.roomWBPrompt()\"><i class=\"fa fa-keyboard-o\"></i>Open Whiteboard</button> <button id=\"open-all-whiteboards\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.openWBFrame()\"><i class=\"fa fa-keyboard-o\"></i>Open All Whiteboards</button> <button id=\"del-rooms\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\" onclick=\"window.undeleteRooms()\"><i class=\"fa fa-keyboard-o\"></i>Undelete Rooms</button>";
        if(window.flipnameflag) cloneButtons.outerHTML = "<button id=\"clone-self\" class=\"menu-button\" aria-keyshortcuts=\"ctrl+shift+6\"><i class=\"fa fa-keyboard-o\"></i>This is a clone</button>";
        var cafeAddon = document.createElement("div");
        cafeAddon.id = "cafe-header-submenu";
        cafeAddon.style = "font-size:32pt;font-weight:bold;width:100%;position:absolute;z-index:1000";
        document.getElementById("cafe").appendChild(cafeAddon);
        if(window.mod.tnum == "T5")document.getElementById("cafe").style.background = "black";

        if(window.mod.incenter) document.getElementById("cafe").appendChild(document.getElementById("menu-toggle-button")),document.getElementById("menu-toggle-button").style="position:absolute;left:0px;top:0px;z-index:1000;background:none;color:white;border: 1px outset #ffffff90",document.getElementById("cafe-header").innerHTML = "";
        if(window.mod.super&&!window.flipnameflag)
            alerters = [
                new Alerter(20, "The Main Account is disconnected!! Check on the main computer!",10000,function(){return !!Array.from(document.getElementsByClassName("classroom-user-info")).filter(d=>d.title.indexOf("Mathnasium@Home Burbank is online")>-1).length||!document.getElementsByClassName("menu-user-tab-selected").length||document.getElementsByClassName("menu-user-tab-selected")[0].innerHTML != "Users"}),
                new Alerter(30, "Table 8 is disconnected; students are not being logged.",65000-(!!window.isTheChosenOne)*56000,function(){return (!window.utils.getRooms().filter(r => r.isActiveRoom()&&(r.time.getMinutesElapsed() > -5 && !r.endTime.isPassed())).length||!!Array.from(document.getElementsByClassName("classroom-user-info")).filter(d=>d.title.indexOf("Mathnasium is online")>-1).length)||!document.getElementsByClassName("menu-user-tab-selected").length||document.getElementsByClassName("menu-user-tab-selected")[0].innerHTML != "Users"}),
                new Alerter(35, "Students are waiting to be assigned.",60000,function(){if(window.mod.tnum=="T2")return true; return !window.utils.getUsers().filter(p=>!p.isMod&&p.isOnline&&(!p.roomName)).length}),
                new Alerter(36, "Students are online and in the wait room.",11*60000,function(){return !window.utils.getUsers().filter(p=>!p.isMod&&p.isOnline&&(p.inWaitingRoom())).length}),
                new Alerter(40, "An instructor is not online!", 180000, function(){if(!window.tablesOnline)return true; var time = Date.now();return Object.keys(window.tablesOnline).filter(w=>window.tablesOnline[w] + 5000 < time)}),
                new Alerter(50, "A student has not been seen for several minutes!", 10000, function(){return true; return !window.utils.getRooms().filter(r=>r.isActiveRoom() && r.time.isPassed() && (!r.isExpired()||r.hasStudentsOnline())&&(window.seenList[r.getSimpleName()]>0)&&(Date.now()-window.seenList[r.getSimpleName()] > seenStudentAlertTime * 60000)).length}),
                new Alerter(55, "A student has not been seen yet!", 10000, function(){return !window.utils.getRooms().filter(r=>r.isActiveRoom() && r.time.isPassed() && (!r.isExpired()||r.hasStudentsOnline())&&(window.seenList[r.getSimpleName()]<0)&&(Date.now()+window.seenList[r.getSimpleName()] > unseenStudentAlertTime * 60000)).length}),
            ], alerters[1].onalert = function(){if(window.isTheChosenOne)window.parent.postMessage({action: "pre-flight-log-event",type: "page-refresh",description: ""}, "*")};

        window.lastCheckIn = JSON.parse(localStorage.getItem("lastchkin"));
        window.WBList = JSON.parse(localStorage.getItem("wblist"));
        window.seenList = JSON.parse(localStorage.getItem("seenlist"));
        window.previouslyOnline = JSON.parse(localStorage.getItem("previouslyonline"));
        window.tablesOnline = JSON.parse(localStorage.getItem("tablesonline"));
        window.openedRooms = JSON.parse(localStorage.getItem("openedrooms"));
        window.hideTutorEle = localStorage.getItem("hidetutors")=="1";
        return true;
    }
    function clickCheck()
    {
        var c = document.getElementsByClassName("menu-user-tab")[1];
        if(!c) return setTimeout(clickCheck,1000);
        c.click();
        if(document.body.outerHTML.indexOf("Mathnasium is online") == -1 && window.mod.super && window.mod.hasTable8 && window.isTheChosenOne)
        {
            if(document.getElementsByClassName("menu-user-tab-selected")[0].innerHTML == "Users")
            {
                window.open(window.table8,"_blank");
                window.closemic=true;
                if(window.openclonewindows != [])
                    window.summa.forEach((c,i)=>window.openclonewindows[i]=window.open(c,'_blank'))
            }
        }
        inlVar();
    }
    if(window.location.href.indexOf("classrooms")!= -1)
    {
        clickCheck();
        setInterval(function(){

            var titls = document.getElementsByClassName("breakout-room-title");
            for(i = 0; i < titls.length; i++)
            {
                titls[i].innerHTML = titls[i].innerHTML.substring(0,28);
            }
            if(!setupped){
                setupped = setups();
            }
            if(!setThemes)
            {
                setThemes = setTheme();
            }
            if(window.closemic||window.flipnameflag)
            {
                if(document.hidden)
                {
                    var v = Array.prototype.slice.call(document.getElementsByClassName("participant-stream-video"));
                    v.forEach(function(n){n.volume=0.2});
                    var d = document.getElementById("i-am-speaking");
                    if(d)
                    {
                        if(d.getElementsByTagName("i")[0].classList.contains("fa-microphone"))d.click();
                    }
                }
                else
                {
                    var d = document.getElementById("i-am-speaking");
                    if(d)
                    {
                        if(d.getElementsByTagName("i")[0].classList.contains("fa-microphone-slash"))d.click();
                    }
                    var v = Array.prototype.slice.call(document.getElementsByClassName("participant-stream-video"));
                    v.forEach(function(n){n.volume=1});
                }
            }
            var d = document.getElementById("cafe-header-submenu");
            var t = new Date();
            if(d)
            {
                if((t.getMinutes() > 25 && t.getMinutes() < 30 && t.getDay() != 6) || (t.getMinutes() > 55 && t.getMinutes() < 60) && t.getDay() != 4)
                    d.style.color = (d.style.color == "red"?"white":"red");
                else
                    d.style.color = "white";
                d.innerHTML = "";
                if(window.mod.hasTable8)
                {
                    d.innerHTML = "<div onclick='window.showCtrls=!window.showCtrls' style='position:absolute;right:0%;top:0%;background-color:#2b343b;border:1px solid black;z-index:500;user-select:none'  onmouseup=''>" + (t.getMonth()+1) + "/" + t.getDate() + " &nbsp;&nbsp;&nbsp;" + (t.getHours()%12+(t.getHours()%12 == 0?12:0)) + ":" + (t.getMinutes() < 10?"0":"") + t.getMinutes() + ":" + (t.getSeconds() < 10?"0":"") + t.getSeconds() + (t.getHours() > 11? " PM":" AM") + "</div>";
                }
            }
            if(setupped && window.initializedLocals)
            {
                if(window.showCtrls)d.innerHTML += getCtrls();
                else getCtrls();
            }
            if(closeAt.isPassed() && window.mod.ismaster)
            {
                window.utils.getRooms().forEach(r => {r.users.forEach(p => window.removeUser(p.id,r.id)); window.deleteRoom(r.id);});
                window.close();
            }
            window.ticker = (window.ticker+1)%32;
        },500);
    }
    function getCtrls()
    {
        if(window.flipnameflag)
        {
            var dban = document.getElementById("breakout-room-banner");
            if(dban&&dban.innerHTML.indexOf("You are in Breakout Room:  ")!=-1)
            {
                document.getElementsByTagName("title")[0].innerHTML =  dban.innerHTML = dban.innerHTML.replace("You are in Breakout Room:  ", "");
            }
        }
        var outp = "<div style='position:absolute;top:50px;right:0px;'>";
        if(window.mod.tutoring)
        {
            var current = getCurrentRoom();
            var dban = document.getElementById("breakout-room-banner");
            if(dban)
            {
                if(window.themeColor)dban.style.backgroundColor = window.themeColor;
                dban.style.fontSize = "18pt";
                dban.style.fontWeight = "bold";
                if(dban.innerHTML.indexOf("You are in Breakout Room:  ")!=-1)dban.innerHTML = dban.innerHTML.replace("You are in Breakout Room:  ", "");
            }
            var tn = window.mod.tnum;
            var rms = window.utils.getRooms(true).filter(r => (r.isActiveRoom() && r.hasStudents() && r.getCurrentTable() == tn) || r.filteredName == "breakroom" || (current.name && current.name.indexOf(r.name)!=-1));
            window.clickables = rms.map(r => r.entryButton);
            var time = Date.now();
            if(current.name && current.pad)
                window.WBList[current.name.substring(0,28)] = current.pad.replace(/uid\=[0-9]/g,"uid=3") + ("&room=") + encodeURI(current.name);
            outp += "<table style='width:100%' cellspacing='0'>";
            rms.forEach((r,i) => {
                if(current.name && current.name.indexOf(r.name)!=-1)
                {
                    if(document.getElementById("menu-share-webcam-video"))outp += "<tr><td colspan='2' style='cursor:pointer;border:3px outset blue;padding:8px 22px;font-size:12pt;user-select:none;color:#fff;background-color:#02a;font-weight:bold;text-align:center' onmouseup='document.getElementById(\"menu-share-webcam-video\").click()'><i class='fa fa-camera fa-lg'></i></td></tr>";
                    outp += "<tr><td style='border:3px inset #f4f4f4;padding:7px;font-size:12pt;user-select:none;color:#777;background-color:#eee;font-weight:normal' onclick='document.getElementById(\"pad-frame\").style.width = \"100%\";document.getElementById(\"pad-frame2\").style.width = \"0%\";document.getElementById(\"pad-frame2\").src=\"\"'>" + r.getName() + "</td>";
                    window.lastCheckIn[r.getSimpleName()] = time;
                }
                else if(r.filteredName == "breakroom")
                {
                    outp += "<tr> <td colspan='2' style='cursor:pointer;border:3px outset #900;padding:7px;font-size:12pt;user-select:none;color:white;background-color:#800;font-weight:bold' onmouseup = 'window.clickables[" + i + "].click()' >break room</td>";
                }
                else
                {
                    var lastRoomTime = window.lastCheckIn[r.getSimpleName()];
                    var elapsedTime = (lastRoomTime ? Math.floor((time - lastRoomTime)/60000) : Math.floor(r.time.getMinutesElapsed()));
                    var lastMin = (lastRoomTime ? " <b>[" + elapsedTime + " m]</b>" : " <b>[Not seen]</b>");
                    var hasFlash = (elapsedTime > 5 && (window.ticker%4>1)&&!window.mod.immune?"#f82":"#eee");
                    var hasFlash2 = (elapsedTime > 5 && (window.ticker%4>1)&&!window.mod.immune?"#ff9221":"#f4f4f4");
                    if(window.mod.immune)lastMin = "";
                    outp += "<tr><td style='cursor:pointer;border:3px outset "+hasFlash2+";padding:7px;font-size:12pt;user-select:none;color:black;background-color:"+hasFlash+";font-weight:normal' onmouseup = 'window.clickables[" + i + "].click()' >" + r.getName() + lastMin + "</td>";
                }
                if(window.WBList[r.name] && r.filteredName != "breakroom") outp += "<td style='cursor:pointer;padding:7px;font-size:12pt;border:3px outset #f4f4f4;padding:7px;font-size:12pt;user-select:none;color:black;background-color:#eee' onmouseup = 'window.open(\"" + window.WBList[r.name] + "\",\"_blank\")'><i class='fa fa-link'></i></td>";
                outp += "</tr>"
            });
            outp += "</table>";
            if(window.mod.tnum=="T2")outp += "<div style = 'user-select:none;border:8px double #ccffde;background-color:#60ffa0;font-size:12pt;font-family:Times New Roman;text-align:center;color:#008800' onmousedown = 'document.getElementById(\"audio-alert\").play()'>Cause Anxiety</div>";
        }
        var titls = document.getElementsByClassName("breakout-room-title");
        for(i = 0; i < titls.length; i++)
        {
            if(titls[i].innerHTML.length > 28)titls[i].innerHTML = titls[i].innerHTML.substring(0,28);
        }
        var warntb = {};
        if(window.mod.super)
        {
            {
                var rooms = window.utils.getRooms();
                var roomnum = document.getElementById("nroomamount");
                var roomAmount = rooms.filter(r => r.isActiveRoom());
                if(roomnum)roomnum.innerText = "Add Rooms: " + roomAmount.length;
                if(window.breakoutRooms && document.getElementById("open-all-whiteboards"))
                {
                    if(roomAmount.length - roomAmount.filter(r=>r.pad).length > 0) document.getElementById("open-all-whiteboards").style.display = "";
                    else document.getElementById("open-all-whiteboards").style.display = "none";
                }
                rooms.forEach(r=>window.openedRooms[r.name] = {id:r.id, pad:r.pad});
                rooms = rooms.filter(r => r.isActiveRoom() && r.time.isPassed() && (!r.isExpired()||r.hasStudentsOnline()));
                var tableRosters = {};
                rooms.forEach(r => {var ct = r.getCurrentTable();tableRosters[ct]?tableRosters[ct].push(r):tableRosters[ct]=[r]});
                var onlineTutors = window.utils.getUsers().map(u => u.getTableNumber()).filter(u => u);
                var missingTutorList = Object.keys(tableRosters).filter(t => !onlineTutors.includes(t));
                var tutorKeys = Object.keys(tableRosters);
                tutorKeys.sort((a,b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
                tutorKeys.forEach(t => {
                    var bga = "#106545";
                    var txtut = t[0] + "able " + t.slice(1);
                    if(missingTutorList.includes(t))
                    {
                        if(!window.tablesOnline[txtut])
                            warntb[txtut] = Date.now().toString(36);
                        else
                            warntb[txtut] = window.tablesOnline[txtut];
                        bga = "#880000";
                        txtut += " (MISSING)";
                    }
                    else
                    {
                        warntb[txtut] = Date.now().toString(36);
                        if(tableRosters[t].filter(r=>r.time.isPassed()&&!r.isExpired()).length > 3)
                        {
                            bga = "#540099";
                            txtut += " (4 STUDENTS)";
                        }
                    }
                    if(!window.hideTutorEle)outp += "<div style='text-shadow: 1px 1px 0px rgba(0,0,0,1);border:1px outset #106545;padding:7px;font-size:16pt;user-select:none;color:white;background-color:"+bga+";font-weight:bold;' onmouseup='window.hideTutorEle=!window.hideTutorEle'>" + txtut + "</div>";
                    tableRosters[t].forEach(r => {
                        var bgc;
                        var rmtxt = r.getName();
                        var simp = r.getSimpleName();
                        var online = r.hasStudentsOnline();
                        if(!online)
                        {
                            bgc = "#e8d020";
                            if(!window.previouslyOnline.includes(rmtxt))
                            {
                                bgc="#ff6060";
                                rmtxt = "<b>" + rmtxt + " (NO SHOW)</b>";
                            }
                        }
                        else
                        {
                            bgc = "#a0ffd8e2";
                            var seenData = window.seenList[simp];
                            if(!window.previouslyOnline.includes(rmtxt))window.previouslyOnline.push(rmtxt);
                            if(!r.hasTutor())
                            {
                                if(!seenData) rmtxt = rmtxt + " <b>[Not Seen]</b>";
                                else
                                {
                                    var lastTime = (new window.utils.TimeReader(Math.abs(seenData))).getMinutesElapsed();
                                    var alertTime = (seenData<0?unseenStudentAlertTime:seenStudentAlertTime);
                                    var scariness = 255*(lastTime)/alertTime;
                                    if(scariness > 255) scariness = 255;
                                    if(scariness < 0) scariness = 0;
                                    if(seenData<0)
                                    {
                                        if(window.ticker%4>1 && lastTime > alertTime) bgc = "#e8d020";
                                        rmtxt = "<b>" + rmtxt + " <span style='color:rgb(0,0," + scariness + ")'>[New: " + Math.floor(lastTime) + "m]</span></b>";
                                    }
                                    else
                                    {
                                        if(window.ticker%4>1 && lastTime > alertTime) bgc = "#e8d020";
                                        rmtxt = rmtxt + " <b><span style='color:rgb(" + scariness + ",0,0)'>[" + Math.floor(lastTime) + "m]</span></b>";
                                    }
                                }
                            }
                        }
                        if(r.hasTutor())
                        {
                            rmtxt = "► " + rmtxt;
                            window.seenList[simp] = Date.now();
                        }
                        if(!window.seenList[simp]&&online)
                        {
                            window.seenList[simp] = -Date.now()
                        }
                        if(r.isExpired()&&r.hasStudents())bgc = "#a0a0b0";
                        if(!window.hideTutorEle)outp += "<div style='text-shadow: 3px 3px rgba(0,0,0,0.17);padding:7px;font-size:13pt;user-select:none;color:black;background-color:"+bgc+";font-weight:normal' onmouseup='window.hideTutorEle=!window.hideTutorEle'>" + rmtxt+ "</div>";
                    });
                });
            }
            if(window.hideTutorEle)outp += "<div style='border:4px outset #ffefd4;padding:2px;font-size:8pt;min-width:180px;cursor:pointer;text-align:center;user-select:none;color:black;background-color:#ffebcd;font-weight:normal' onmouseup='window.hideTutorEle=!window.hideTutorEle'>▼</div>";
            else
            {
                var misspellList = Array.from(document.getElementsByClassName("breakout-room-title")).map(t=>t.innerHTML).filter(t=>t.toLowerCase()!="break room"&&t.toLowerCase()!="wait room"&&t.toLowerCase()!="{keep alive}"&&t.substring(0,7)!="NO SHOW"&&!(t.match(/[0-9][0-9]?:[0-9][0-9]\ T[0-9][0-9]?(\/T[0-9][0-9]?)? [A-Za-z]*/)));
                if(misspellList.length > 0)
                    outp += "<div style='padding:7px;font-size:14pt;user-select:none;color:black;background-color:Orange;font-weight:bold' >MISSPELLED!:</div>";
                for(var i = 0; i < misspellList.length; i++)
                {
                    outp += "<div style='padding:7px;font-size:14pt;user-select:none;color:black;background-color:yellow;font-weight:bold' >" + misspellList[i] + "</div>";
                }
                var unassigned = window.utils.getUsers(true).filter(u => !u.isMod && u.isOnline && (!u.roomName||u.inWaitingRoom()));
                if(unassigned.length > 0)
                    outp += "<div style='padding:7px;font-size:14pt;user-select:none;color:black;background-color:LightBlue;font-weight:bold' >Waiting Students:</div>";
                for(var i = 0; i < unassigned.length; i++)
                {
                    outp += "<div style='padding:7px;font-size:14pt;user-select:none;color:black;background-color:DodgerBlue;font-weight:bold' >" + unassigned[i].name + " " + unassigned[i].timeOnline + "</div>";
                }
            }
        }
        window.tablesOnline = warntb;
        localStorage.setItem("lastchkin",JSON.stringify(window.lastCheckIn))
        localStorage.setItem("wblist",JSON.stringify(window.WBList))
        localStorage.setItem("seenlist",JSON.stringify(window.seenList))
        localStorage.setItem("previouslyonline",JSON.stringify(window.previouslyOnline))
        localStorage.setItem("tablesonline",JSON.stringify(window.tablesOnline))
        localStorage.setItem("openedrooms",JSON.stringify(window.openedRooms))
        localStorage.setItem("hidetutors",1*(window.hideTutorEle));

         outp += "</div>";
        return outp;
    }
    // Your code here...
})();


(function(){


window.calcFunc = {
gcf: function(n1,n2)
{
	n1 = Math.abs(n1);
	n2 = Math.abs(n2);
	var major = n1 > n2? n1 : n2;
	var minor = major == n1? n2: n1;
	var d = minor;
	while((major % d > 0) || (minor %d > 0))
	{
		d--;
	}
	return d;
},
cf: function(n1,n2)
{
	n1 = Math.abs(n1);
	n2 = Math.abs(n2);
	var major = n1 > n2? n1 : n2;
	var minor = major == n1? n2: n1;
	var d = minor;
	var fac = [];
	while(d > 1)
	{
		if((major % d == 0) && (minor %d == 0))
		{
			fac.push(d);
		}
		d--;
	}
	return fac;
},
facs: function(n1)
{
	n1 = Math.abs(n1);
	var fac = [];
    var d = n1;
	while(d >= 1)
	{
		if((n1 % d == 0))
		{
			fac.push(d);
		}
		d--;
	}
	return fac;
},
lcm: function(n1,n2)
{
	var gcfr = this.gcf(n1,n2);
	return n1 * n2 / (gcfr);
},
frac: function(n, max=100000){
    var s = (n<0?"-":"");
	n = Math.abs(n);
	var num = 0;
	var den = 0;
	var tol = 1/(max*max);
	function cp(i){return Math.abs(Math.round(i)-i) < tol;}
	for(var j = 1; j < max; j++)
	{
		if(cp(n*j))
		{
			num = Math.round(n*j);
			den = j;
			break;
		}
	}
	return s + num+"/"+den;
},
mixed: function(n, max=100000){
    var s = (n<0?"-":"");
	n = Math.abs(n);
	var num = 0;
	var den = 0;
	var tol = 1/(max*max);
	function cp(i){return Math.abs(Math.round(i)-i) < tol;}
	for(var j = 1; j < max; j++)
	{
		if(cp(n*j))
		{
			num = Math.round(n*j);
			den = j;
			break;
		}
	}
    var w = Math.floor(num/den);
    if(n == 0)return "0";
	return s + (w?w+" ":"") + (num%den==0?"":(num%den)+"/"+den);
},
polyMul: function(p1,p2)
{
    var res = [];
    res[p1.length+p2.length-2]=null, res.fill(0);
    for(var i = 0, l = p1.length; i < l; i++)
        for(var j = 0, k = p2.length; j < k; j++)
            res[i+j]+=p1[i]*p2[j];
    return res;
},
polyDiv: function(p1,p2)
{
	for(var l=p2.length, k = p1.length, res = p2.slice(0, k-1), qt = [], r = 0, i = k-1; i < l; i++)
	{
		qt.push(r=res.shift()/p1[0]),res.push(p2[i]);
		for(var j = 1; j < k; j++)
			res[j-1]-=r*p1[j];
	}
	return qt.push(res), qt;
},
quadFormula: function(args)
{
	var a = args[0], b = args[1], c = args[2], disc = b*b-4*a*c;
	if(disc == 0) return -b/(2*a);
	if(disc < 0)
	{
		var sqrt = this.rad(-disc);
		var imfrac = this.frac(sqrt[0]/(2*a)).split("/").map(f=>parseInt(f));
		return this.frac(-b/(2*a))+"±"+imfrac[0]+(sqrt[1]!=1?"√"+sqrt[1]:"")+"i/"+imfrac[1];
	}
	var sqrt = this.rad(disc);
	var imfrac = this.frac(sqrt[0]/(2*a)).split("/").map(f=>parseInt(f));
	if(sqrt[1]==1)return this.frac(-b/(2*a)+sqrt[0]/(2*a))+","+this.frac(-b/(2*a)-sqrt[0]/(2*a))
	return this.frac(-b/(2*a))+"±"+imfrac[0]+"√"+sqrt[1]+"/"+imfrac[1];
},
invMat3x3: function(mat)
{
	var det = 1/(mat[0][0]*(mat[1][1]*mat[2][2]-mat[1][2]*mat[2][1]) - mat[0][1]*(mat[1][0]*mat[2][2]-mat[1][2]*mat[2][0]) + mat[0][2]*(mat[1][0]*mat[2][1]-mat[1][1]*mat[2][0]));
	var inverse = [[0,0,0],[0,0,0],[0,0,0]];
	inverse[0][0] = det*(mat[1][1]*mat[2][2]-mat[1][2]*mat[2][1]);
	inverse[1][0] = -det*(mat[1][0]*mat[2][2]-mat[1][2]*mat[2][0]);
	inverse[2][0] = det*(mat[1][0]*mat[2][1]-mat[1][1]*mat[2][0]);
	inverse[0][1] = -det*(mat[0][1]*mat[2][2]-mat[0][2]*mat[2][1]);
	inverse[1][1] = det*(mat[0][0]*mat[2][2]-mat[0][2]*mat[2][0]);
	inverse[2][1] = -det*(mat[0][0]*mat[2][1]-mat[0][1]*mat[2][0]);
	inverse[0][2] = det*(mat[0][1]*mat[1][2]-mat[0][2]*mat[1][1]);
	inverse[1][2] = -det*(mat[0][0]*mat[1][2]-mat[0][2]*mat[1][0]);
	inverse[2][2] = det*(mat[0][0]*mat[1][1]-mat[0][1]*mat[1][0]);
	return inverse;
},
det3x3: function(mat)
{
    return (mat[0][0]*(mat[1][1]*mat[2][2]-mat[1][2]*mat[2][1]) - mat[0][1]*(mat[1][0]*mat[2][2]-mat[1][2]*mat[2][0]) + mat[0][2]*(mat[1][0]*mat[2][1]-mat[1][1]*mat[2][0]));
},
matVecMul3x3: function(mat,vec)
{
	return [vec[0]*mat[0][0]+vec[1]*mat[0][1]+vec[2]*mat[0][2],vec[0]*mat[1][0]+vec[1]*mat[1][1]+vec[2]*mat[1][2],vec[0]*mat[2][0]+vec[1]*mat[2][1]+vec[2]*mat[2][2]];
},
solve3x3: function(mat)
{
	var aggmat = [[mat[0][0],mat[0][1],mat[0][2]],[mat[1][0],mat[1][1],mat[1][2]],[mat[2][0],mat[2][1],mat[2][2]]];
	var vec = [mat[0][3],mat[1][3],mat[2][3]];
	aggmat = this.invMat3x3(aggmat);
	return this.matVecMul3x3(aggmat,vec);
},
invMat2x2: function(mat)
{
    var det = 1/(mat[0][0]*mat[1][1]-mat[1][0]*mat[0][1]);
    return [[det*mat[1][1],-det*mat[0][1]],[-det*mat[1][0],det*mat[0][0]]];
},
matVecMul2x2: function(mat,vec)
{
    return [vec[0]*mat[0][0]+vec[1]*mat[0][1],vec[0]*mat[1][0]+vec[1]*mat[1][1]];
},
solve2x2: function(mat)
{
    var aggmat = [[mat[0][0],mat[0][1]],[mat[1][0],mat[1][1]]];
    var vec = [mat[0][2],mat[1][2]];
    aggmat = this.invMat2x2(aggmat);
    return this.matVecMul2x2(aggmat,vec);
},
randInt: function(n1, n2)
{
    return Math.floor(Math.random()*(1+n2-n1))+n1;
},
pickRandom: function(arr)
{
    return arr[this.randInt(0, arr.length-1)];
},
emptyList: function(size)
{
    var n = [];
    n[size-1]=null;
    return n.fill();
},
list: function(size,mapper,randSort=false)
{
    var n = [];
    n[size-1]=null;
    n=n.fill().map(mapper);
    if(randSort) n.sort(function(){return (Math.random()<0.5)*2-1});
    return n;
},
countFrequency: function(arr)
{
    var l = {};
    arr.forEach(i => {
        if(l[i])l[i]++;
        else l[i] = 1;
    });
    return l;
},
twostep: function()
{
	var ml = this.randInt(2,13), sb = this.randInt(-21,21), ans = this.randInt(-12,20);
	return ml+"x" + (sb>0?"+":"") + sb + " = " + (ans*ml + sb);
},
onestep: function()
{
    if(Math.random() < 0.5)
    {
        var ml = this.randInt(2,13), sb = this.randInt(-21,21), ans = this.randInt(-12,20);
        return ml+"x" + " = " + (ans*ml);
    }
    else
    {
        var ml = this.randInt(2,13), sb = this.randInt(-21,21), ans = this.randInt(-12,20);
        return "x" + (sb>0?"+":"") + sb + " = " + (ans + sb);
    }
},
var2: function()
{
    var cmap = ["x","y","z"];
    var eqs = this.list(2,l=>this.list(2,()=>this.randInt(-9,9)));
    var ans = this.list(2,()=>this.randInt(-12,12));
    ans = this.matVecMul2x2(eqs,ans);
    eqs = eqs.map((t,j)=>{
        var v = t.map((n,i) => (n>0?"+":"-")+(n==1||n==-1?"":Math.abs(n))+cmap[i]).filter(m=>m[1]!="0").join("")+" = "+ans[j];
        if(v[0]=="+")v = v.substr(1);
        return v;
    })
    return eqs.join("\n");
},
var3: function()
{
    var cmap = ["x","y","z"];
    var eqs = this.list(3,l=>this.list(3,()=>this.randInt(-9,9)));
    var ans = this.list(3,()=>this.randInt(-12,12));
    ans = this.matVecMul3x3(eqs,ans);
    eqs = eqs.map((t,j)=>{
        var v = t.map((n,i) => (n>0?"+":"-")+(n==1||n==-1?"":Math.abs(n))+cmap[i]).filter(m=>m[1]!="0").join("")+" = "+ans[j];
        if(v[0]=="+")v = v.substr(1);
        return v;
    })
    return eqs.join("\n");
},
trigproblem: function()
{
    var deg = [0,30,45,60,90,120,135,150,180,210,225,240,270,300,315,330,360];
    var rad = ["0","{pi/6}","{pi/4}","{pi/3}","{pi/2}","{2pi/3}","{3pi/4}","{5pi/6}","pi","{7pi/6}","{5pi/4}","{4pi/3}","{3pi/2}","{5pi/3}","{7pi/4}","{11pi/6}","2pi"];
    var func = ["sin","cos","tan"];
    if(Math.random() < 0.5)
    {
        return "!" + this.pickRandom(func) + "(" + this.pickRandom(deg) + "deg)";
    }
    else
    {
        return "!" + this.pickRandom(func) + "( " + this.pickRandom(rad) + " )";
    }
},
formatPoly: function(p)
{
    var r = "", ch=["", "x", "x^2", "x^3", "x^4 ", "x^5 ", "x^6 ", "x^7 ", "x^8 ", "x^9 ", "x^{10} ", "x^{11} ", "x^{12} "];
    return p.reverse().map((c,i)=>(i>0&&c==1?"":c)+ch[i]).filter(c=>c[0]!="0").reverse().map((a,i)=>(i!=0&&a[0]!="-"?"+"+a:a)).join("");
},
ln: Math.log,
log: function(x,base=10){return this.ln(x)/this.ln(base)},
sqrt: Math.sqrt,
root: function(x,r){return Math.pow(x,(1/r))},
rad: function(x,r=2){var n = 2, res = 1; while(n <= x){if((x%Math.pow(n,r))==0){res*=n;x/=Math.pow(n,r);}else n++;};return [res,x];},
ans: 0,
sin: function(d,r){if(!r)return Math.sin(d*this.pi/180);return Math.sin(d)},
cos: function(d,r){if(!r)return Math.cos(d*this.pi/180);return Math.cos(d)},
tan: function(d,r){if(!r)return Math.tan(d*this.pi/180);return Math.tan(d)},
asin: function(d,r){if(!r)return Math.asin(d)*180/this.pi;return Math.asin(d)},
acos: function(d,r){if(!r)return Math.acos(d)*180/this.pi;return Math.acos(d)},
atan: function(d,r){if(!r)return Math.atan(d)*180/this.pi;return Math.atan(d)},
rdiv: function(a,d){return Math.floor(a/d)+"r."+(a%d)},
sum: function(l){for(var i = 0, sum = 0; i < l.length; i++)sum+=l[i];return sum},
mean: function(l){return this.sum(l)/l.length},
median: function(l){l.sort();var ln = l.length, m = ln>>1;if(ln&1)return l[m];return (l[m-1]+l[m])/2},
factors: function(n){var flist = [];for(var i = 1; i <= n; i++)if(n%i==0)flist.push(i); return flist},
factorPairs: function(n){var flist = [];for(var i = 1, l = Math.sqrt(n); i <= l; i++)if(n%i==0)flist.push([i,n/i]); return flist},
isPrime: function(n){var i = 2; while(i < n)if((n%i)==0)return false; return true;},
primeFactors: function(x){var n = 2, res = []; while(n <= x){if((x%n)==0){res.push(n);x/=n;}else n++;};return res;},
fromFactors: function(args){for(var i = 0, m = 1, l = args.length; i < l; i++)m*=args[i]; return m},
polyMulRecur: function(args){if(args.length<=2)return this.polyMul(args[0],args[1]);else return this.polyMul(args[0], this.polyMulRecur(args.slice(1)))},
quadFactor: function(args){var ac = args[0]*args[2],success=false,bneg=(1-((args[1]<0)<<1)),fp=0,gcfp=0;for(var i = 0, f = this.factors(Math.abs(ac)), fi=f[i]*bneg, l = f.length; i < l; i++, fi=f[i]*bneg)if(ac/fi+fi==args[1])success = true,fp=fi,gcfp=this.gcf(args[0],fp)*(1-((args[0]<0&&fp<0)<<1));if(!success)return "prime";return "("+(gcfp==1?"":gcfp)+"x+"+this.gcf(ac/fp,args[2])*(1-(((ac/fp)<0)<<1))+")("+(args[0]/gcfp==1?"":args[0]/gcfp)+"x+"+(fp/gcfp)+")"},
post: function(){return console.log(this.ans),this.ans},
store: function(){return this.mem = this.ans},
mem: 0,
e: Math.E,
pi: Math.PI,
};



var textCalcState = false;
var history = [];
var histChoice = 0;
/*eslint-disable*/function keyd(event){
    function replaceCalc(s)
    {
        if(window.calcFunc[s]) s = "calcFunc." + s;
        return s;
    }
    if(textCalcState){
        textCalcState = false;
        var tx = document.getElementById("calcTool").innerHTML;
        if(event.keyCode==37||event.keyCode==39)
            document.getElementById("calcTool").innerHTML = tx.substring(0,tx.indexOf("="));
        else
            document.getElementById("calcTool").innerHTML = "";
    };
    if(event.keyCode==38)
    {
        histChoice = histChoice <= 0? 0: histChoice - 1;
        document.getElementById("calcTool").innerHTML = history[histChoice];
        textCalcState = true;
    }
    if(event.keyCode==40)
    {
        histChoice = histChoice >= history.length - 1? history.length - 1: histChoice + 1;
        document.getElementById("calcTool").innerHTML = history[histChoice++];
        textCalcState = true;
    }
    if(event.keyCode==13){
        var d = document.getElementById("calcTool");
        d.innerHTML =d.innerHTML.replace("<br>","");
        event.preventDefault();
        try{
            calcFunc.ans = eval(d.innerHTML.replace(/\^/g,"**").replace(/([0-9][0-9]*)(\ [0-9][0-9]*\/[0-9][0-9]*)/g,"($1+$2)").replace(/[_a-zA-Z][_a-zA-Z0-9]{0,30}/g,replaceCalc));
            var post = calcFunc.ans;
            if(!isNaN(calcFunc.ans))
                post = Math.round(calcFunc.ans*100000000000)/100000000000;
            if(typeof post == "object")
                post = JSON.stringify(post);
            d.innerHTML += "=" + post;
            history.push(d.innerHTML);
            histChoice = history.length -1;
            textCalcState = true;
        }
        catch(e)
        {
            d.innerHTML += "= error";
        }
    }
};

(function() {
    function putTitle()
    {
        if(window.location.href.indexOf("&room=")==-1) return;
        var roomName = decodeURI(window.location.href.substring(window.location.href.indexOf("&room=")+6));
        document.title = roomName;
        var roomTitle = document.createElement("div");
        roomTitle.style = "width:100%;height:24px;background:#333333;color:white;font-weight:bold;font-size:18px;text-align:center;user-select:text";
        roomTitle.innerText = roomName;
        var dc = document.getElementById("editbar");
        dc.insertBefore(roomTitle, dc.childNodes[0]);
        window.dispatchEvent(new Event('resize'));
    }
    var ml = 0;
    ml = setInterval(function(){
        if(document.getElementById("text-editor"))
        {
            setTimeout(putTitle,4000);
            document.getElementsByClassName("stroke-width")[0].innerHTML += "<option value='extra-large' style='font-size: larger;'>Extra-Large</option><option value='giant' style='font-size: larger;'>Giant</option>";
            if(window.themeColor2)document.getElementById("canvas-scroller").style.backgroundColor = window.themeColor2;
            if(window.themeColor2)document.getElementById("draw-container").style.backgroundColor = window.themeColor2;
            if(window.themeColor2)document.getElementById("editbar").style.backgroundImage = "url('')";
            if(window.themeColor2)document.getElementById("editbar").style.border = "0px";

            document.getElementsByClassName("font-size")[0].innerHTML = "<option value=\"4\" style=\"font-size: larger;\">4</option>\n<option value=\"6\" style=\"font-size: larger;\">6</option>\n<option value=\"8\" style=\"font-size: larger;\">8</option>\n<option value=\"10\" style=\"font-size: larger;\">10</option>\n <option selected=\"selected\" value=\"12\" style=\"font-size: larger;\">12</option>\n <option value=\"18\" style=\"font-size: larger;\">18</option>\n <option value=\"24\" style=\"font-size: larger;\">24</option>\n <option value=\"40\" style=\"font-size: larger;\">40</option>\n <option value=\"60\" style=\"font-size: larger;\">60</option>\n <option value=\"72\" style=\"font-size: larger;\">72</option>\n <option value=\"108\" style=\"font-size: larger;\">108</option>\n <option value=\"144\" style=\"font-size: larger;\">144</option>";
            var tx = document.createElement("div");
            tx.contentEditable = true;
            tx.style = "position:relative;display:inline;width:100px;height:30px;top:3px;padding:2px 8px;border:2px inset #f1f3f6;background-color:#101511;font-size:17pt;font-family:courier new;margin-left:20px;color:white";
            tx.id = "calcTool";
            tx.innerHTML = "Enter calculation here...";
            if(window.unstableScript)tx.innerHTML = "Script is not loaded=";
            tx.onkeydown = keyd;
            tx.onclick = function(){if(document.getElementById("calcTool").innerHTML.indexOf("= error")!=-1)document.getElementById("calcTool").innerHTML = document.getElementById("calcTool").innerHTML.substring(0,document.getElementById("calcTool").innerHTML.indexOf("="));if(document.getElementById("calcTool").innerHTML.indexOf("=")!=-1||document.getElementById("calcTool").innerHTML=="Enter calculation here...")document.getElementById("calcTool").innerHTML = "";window.calcToolFocus = true};
            tx.onblur = function(){if(document.getElementById("calcTool").innerHTML=="")document.getElementById("calcTool").innerHTML = "Enter calculation here...";window.calcToolFocus = false};
            var smileydiv = document.createElement("div");
            smileydiv.style = "border:2px outset #f1f3f6;background-color:#f1f3f6;padding:3px;z-index:20000;position:absolute;display:none;font-size:24px";
            document.body.appendChild(smileydiv);
            var reportbutton = document.createElement("li");
            reportbutton.id = "report-page-numbers";
            reportbutton.innerHTML = "<button class=\"grouped-middle button-tool tooltip tooltipstered\" name=\"whiteboard-tool\" style=\"color: black; background-color: rgb(241, 243, 246);font-size:20px\">pg#</button>";
            var smileybutton = document.createElement("li");
            smileybutton.id = "smiley-tool";
            smileybutton.innerHTML = "<button class=\"smiley-tool grouped-middle button-tool tooltip tooltipstered\" name=\"whiteboard-tool\" style=\"color: black; background-color: rgb(241, 243, 246);font-size:20px\" onclick=\"window.updateTool('smiley')\">😃</button>";
            var smileys = "😃😊😁🖒🎇🎢🎈🎉🎊🌟🌠🌷🌻🌼🍊🍋🍌🍍🍎🥕🍓🍔🍕🍩🍪🍞🍫🥛🍬🍭🥚🐈🐇🐬🐟🦜🐝🐣🐘🐔🦓🦒🐎🌎🌙🌞💽🎵⚾️🏀💵🎫";
            if(window.mod.specialSmileys)smileys+=window.mod.specialSmileys;
            Array.from(smileys)
                .map(t=>"<button onclick=\"window.smileyStamp='"+t+"';document.getElementsByClassName('smiley-tool')[0].innerText='"+t+"';window.setFontCursor('"+t+"')\">"+t+"</button>").forEach((s,i)=>{
                if(i&&(i)%7==0)smileydiv.appendChild(document.createElement("br"));
                smileydiv.innerHTML += s;
            });
            document.getElementsByClassName("menu-left")[0].appendChild(smileybutton);
            if(window.showSave)document.getElementsByClassName("menu-left")[0].appendChild(reportbutton);
            if(window.showCalc)document.getElementsByClassName("menu-left")[0].appendChild(tx);
            document.getElementById("smiley-tool").onclick = function(){
                var r = this.getBoundingClientRect();
                smileydiv.style.display = "";
                smileydiv.style.left = r.left+"px";
                smileydiv.style.top = r.bottom+"px";
            };
            document.body.addEventListener("click",function(e){if(e.target!== document.getElementsByClassName("smiley-tool")[0] && e.target !== smileydiv)smileydiv.style.display = "none"});
            if(window.showSave)document.getElementById("report-page-numbers").onclick = function(){

                function isTainted() {
                    try {
                        var pixel = document.getElementById("canvas").getImageData(0, 0, 1, 1);
                        return false;
                    } catch(err) {
                        return (err.code === 18);
                    }
                }
                var pgs = [[]];paper.project.layers.map((l) =>
                                                        (
                    {pg:parseInt(l.name.replace(/[^0-9]/g,"")),signed:(l.getItems({class:paper.PointText}).filter(g =>
                                                                                                                  {
                        return g.content.replace(/\ /g,"").match(/[A-Z][A-Z][A-Z]?[0-9][0-9]?\/[0-9][0-9]?/gi);
                    }).length==0)}
                )).sort((a,b) => a.pg < b.pg?-1:1).forEach((l) =>
                                                           {
                    if(l.signed)pgs[pgs.length-1].push(l.pg+1)
                    else if(pgs[pgs.length-1].length > 0)pgs.push([]);
                });
                pgs[0].splice(0,1);
                var ipage=parseInt(paper.project.activeLayer.name.replace(/[^0-9]/g,""))+1;
                for(var i = 0, l = pgs.length; i < l; i++)
                {
                    if(ipage <= pgs[i][0])
                    {
                        ipage = i;
                        break;
                    }
                }
                var pgs2 = pgs.splice(i);
                pgs = pgs2.concat(pgs);
                var pglist = [], indRecur = 0, cl;
                if(isTainted())
                {
                    while(pglist.length < 10 && pgs.filter(p => p.length > 1).length!=0)
                    {
                        while(pgs[indRecur].length <= 1)
                        {
                            indRecur++;
                            if(indRecur >= pgs.length) indRecur = 0;
                        }
                        pglist.push(pgs[indRecur++].shift());
                        if(indRecur >= pgs.length) indRecur = 0;
                    }
                }
                else
                {
                    pgs.forEach(p => p = p.filter(ind => {l = paper.project.layers["page-"+(ind-1)];if(l.getItems({class:paper.Raster}).length==0)return true; cl = l.getItems()[0].getAverageColor(paper.Path.Rectangle(new paper.Point(-350,-250),new paper.Point(-60,200)));return Math.sqrt(cl.red*cl.red + cl.blue*cl.blue + cl.green*cl.green);}));
                    while(pglist.length < 10 && pgs.filter(p => p.length > 0).length!=0)
                    {
                        while(pgs[indRecur].length == 0)
                        {
                            indRecur++;
                            if(indRecur >= pgs.length) indRecur = 0;
                        }
                        pglist.push(pgs[indRecur++].shift());
                        if(indRecur >= pgs.length) indRecur = 0;
                    }
                }
                tx.innerHTML = (pglist.join(","));
            };
            clearInterval(ml);
        }
    }, 500);
    // Your code here...
})();
})();


function wb()
{
	
//-font paste glitch x
//-font line paste glitch x
//-replaceMathML x
//-extra-large and giant strokes x
//-tutor color x
//-alt check x
//-date stamp x
//-stamp tool x
//-show today's pages x
//-make ctrl+left or right cycle select-page x
//-freeform edit quick toggle x
//-page loaded flag x
//-zoom page to center x
//-reset page matrix on load x
//-set page confirm for adding page x
//-line tool x
//-paper object global reference x
//-cursor speed 
//-shortkeys x

 
// * Branch: release
// * Version: d93d663
// * Commit: d93d6631f277d5f512301518bca41160e5f23176
// * Build: Tue Aug 31 2021 02:53:01 GMT+0000 (Coordinated Universal Time)

(self.webpackChunkconexed_whiteboard_client = self.webpackChunkconexed_whiteboard_client || []).push([[143], {
    4937: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, {
            updateCanvasForText: function() {
                return he
            },
            onWindowResize: function() {
                return ve
            },
            removeGridLines: function() {
                return Ie
            },
            resetZoomLoop: function() {
                return We
            },
            centerPaperView: function() {
                return Fe
            },
            getPageNum: function() {
                return Ve
            },
            repairCurrentPDFMatrices: function() {
                return ut
            }
        });
        var a = o(3267)
          , r = o.n(a)
          , n = (o(4669),
        o(8622),
        o(7728))
          , i = o(103)
          , s = o(990)
          , c = o(6704)
          , l = o(6928)
          , d = o(932)
          , u = o(9249)
          , p = o(8659)
          , g = o(6074)
          , h = o(9444)
          , f = o(2496)
          , m = o(8663)
          , v = o(3128)
          , b = o(8449)
          , y = o(3554)
          , w = o(4007)
          , S = o(6727)
          , j = o.n(S)
          , k = o(1857);

if(window.mod.col)localStorage.setItem("spectrum.defaultColor",JSON.stringify(window.mod.col));
window.paper = r();
        window.globalSocket = l.globalSocketObj;
var tmpDiv = document.createElement("div");
var exprpl = {"0":"\u2070","1":"\u00b9","2":"\u00b2","3":"\u00b3","4":"\u2074","5":"\u2075","6":"\u2076","7":"\u2077","8":"\u2078","9":"\u2079","+":"\u207a","-":"\u207b","=":"\u207c","(":"\u207d",")":"\u207e","a":"\u1d43","b":"\u1d47","c":"\u1d9c","d":"\u1d48","e":"\u1d49","f":"\u1da0","g":"\u1d4d","h":"\u02b0","i":"\u2071","j":"\u02b2","k":"\u1d4f","l":"\u02e1","m":"\u1d50","n":"\u207f","o":"\u1d52","p":"\u1d56","r":"\u02b3","s":"\u02e2","t":"\u1d57","u":"\u1d58","v":"\u1d5b","w":"\u02b7","x":"\u02e3","y":"\u02b8","z":"\u1dbb","A":"\u1d2c","B":"\u1d2e","D":"\u1d30","E":"\u1d31","G":"\u1d33","H":"\u1d34","I":"\u1d35","J":"\u1d36","K":"\u1d37","L":"\u1d38","M":"\u1d39","N":"\u1d3a","O":"\u1d3c","P":"\u1d3e","R":"\u1d3f","T":"\u1d40","U":"\u1d41","V":"\u2c7d","W":"\u1d42","/":"\u141f",".":"\u1427","times":"\u1541"};
var subrpl = {"0":"\u2080","1":"\u2081","2":"\u2082","3":"\u2083","4":"\u2084","5":"\u2085","6":"\u2086","7":"\u2087","8":"\u2088","9":"\u2089","+":"\u208a","-":"\u208b","=":"\u208c","(":"\u208d",")":"\u208e","a":"\u2090","e":"\u2091","h":"\u2095","i":"\u1d62","j":"\u2c7c","k":"\u2096","l":"\u2097","m":"\u2098","n":"\u2099","o":"\u2092","p":"\u209a","r":"\u1d63","s":"\u209b","t":"\u209c","u":"\u1d64","v":"\u1d65","x":"\u2093"};
var replGrp = function(match,p1){return Array.from(p1).map(function(t){if(exprpl[t])return exprpl[t];return t}).join("") };
var replSubGrp = function(match,p1){return Array.from(p1).map(function(t){if(subrpl[t])return subrpl[t];return t}).join("") };
var fracFunc = function(match,p1,p2){var fSize = Math.max(p1.length,p2.length), fMin = Math.min(p1.length,p2.length), dashArr = new Array(fSize), spaceArr = new Array((fSize-fMin)>>1); dashArr.fill("\u2014"), spaceArr.fill(" "); return (p1.length<p2.length?spaceArr.join("")+p1+"\n"+dashArr.join("")+"\n"+p2:p1+"\n"+dashArr.join("")+"\n"+spaceArr.join("")+p2)};
window.setFontCursor = function(iconCode) {
    var canvas = document.createElement("canvas");
    canvas.width = 26;
    canvas.height = 32;

    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.font = "24px Courier New";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(iconCode, 13, 16);
    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL);
    $("#the-canvas").css("cursor", "url(" + dataURL + "), auto");
}
window.updateTool = function(name)
{
Ge("." + name + "-tool"),
            localStorage.setItem("selectedTool", name),
            Je(),
            z = name,
            $("#the-canvas").css({
                cursor: "crosshair"
            }),
            r().project.activeLayer.selected = !1
}
window.createTBox = function(t,color,size,x,y)
{

c.canvasState.incrementProjectObjectCount();
var n = "text:" + d + ":" + c.userState.uid + ":" + (new Date).getTime();
 var textToAdd = {
            userId: c.userState.uid,
            name: n,
            page: r().project.activeLayer.getName(),
            point: [x,y],
            color: color,
            content: t,
fontFamily: "Courier New",
fontWeight: "bold",
            fontSize: size,
            createdAt: new Date().getTime(),
            zoom: r().project.view.getZoom()
        };

        i.globalSocketObj.emit("text:add", Ve(),
            JSON.stringify(textToAdd),
            size,
            r().project.view.getZoom(),
            // this is the acknowledgement sent from server ...
            function (pointTextName) {


        });
i.globalSocketObj.emit("text:update:end", Ve(), n, t);
}
function computeText(input)
{
	if(input.length < 2 || (input[0]!="!" || input[1]!="!"))return input;
	var s = input.substr(2).trim();
	if(s.substr(0,4).indexOf("poly")!=-1)
	{
		s = s.substr(4);
		s = (s[0]=="("?s.substr(1):s).replace(/([\+\)\ ]*)/g,"").replace(/(\^[0-9]*)/g,"").split("(").map(t=>t.split("x").map((t2,i)=>(t2||i>0?Number(t2):1)));
		var ps = window.calcFunc.formatPoly(window.calcFunc.polyMulRecur(s));
		if(ps[0]=="+")ps = ps.substr(1);
		return "!" + ps;
	}
	if(s.indexOf("1-step")!=-1)
	{
		return window.calcFunc.onestep();
	}
	else if(s.indexOf("2-step")!=-1)
	{
		return window.calcFunc.twostep();
	}
	else if(s.indexOf("2-var")!=-1)
	{
		return window.calcFunc.var2();
	}
	else if(s.indexOf("3-var")!=-1)
	{
		return window.calcFunc.var3();
	}
	else if(s.indexOf("trig-problem")!=-1)
	{
		return window.calcFunc.trigproblem();
	}
	return "";
}
function replaceMathML(input)
{
if(input[0]!="!")
return input;
if(input.length > 1 && input[0] == "!" && input[1] == "!")return "";
input = input.substr(1).replace(/\^\{([^}]*)\}?/g,replGrp).replace(/\^(.)/g,replGrp).replace(/\_\{([^}]*)\}?/g,replSubGrp).replace(/\_([^_])/g,replSubGrp).replace(/\-\>/g,"\u2794").replace(/deg/g,"\u00b0").replace(/rad/g,"\u221a").replace(/pm/g,"\u00b1").replace(/\<\=/g,"\u2264").replace(/\>\=/,"\u2265").replace(/\/=/g,"\u2260").replace(/div/g,"\u00f7").replace(/cdot/g,"\u00b7").replace(/times/g,"\u00d7").replace(/infty/g,"\u221e").replace(/~=/g,"\u2248").replace(/cents/g,"\u00a2").replace(/intgrl/g,"\u222b");
input = input.replace(/pi/g,"\u03c0").replace(/theta/g,"\u03b8").replace(/alpha/g,"\u03b1").replace(/beta/g,"\u03b2").replace(/phi/g,"\u03c6").replace(/sigma/g,"\u03a3").replace(/delta/g,"\u03b4").replace(/mu/g,"\u03bc");
input = input.replace(/null/g,"\u2205").replace(/intersect/g,"\u2229").replace(/union/g,"\u222a").replace(/subset/g,"\u2282");
input = input.replace(/nline/g,"<─┼───┼───┼───┼───┼───┼───┼───┼───┼─>\n ");
input = input.replace(/triggrid/g,"  ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐\n  │   │   │   │   │   │   │   │   │   │   │   │\n  │   │   │   │   │   │   │   │   │   │   │   │\n  │   │   │   │   │   │   │   │   │   │   │   │\n  ├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤\n-5π -2π -3π  -π  -π   0   π   π  3π  2π  5π  3π\n  2   │   2   │   2   │   2   │   2   │   2   │\n  │   │   │   │   │   │   │   │   │   │   │   │\n  └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘");
input = input.replace(/grid/g,"┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n├─┼─┼─┼─┼─┼─┼─┼─┼─┼─┤\n└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘");
//input = input.replace(/([^\/]*)\/\/([^\/]*)/,fracFunc);

var string = input;
var matched = string.match(/\{[^{}\/]*\/[^{}\/]*\}?/), fracs = [];
if(!matched)return input;
while(matched)
{
	var frac = {num:matched[0].substring(1,matched[0].indexOf("/")), den:matched[0].substring(matched[0].indexOf("/")+1,matched[0].length+(matched[0].indexOf("}")!=-1?-1:0)), index:matched.index};
	if(frac.num.length < frac.den.length)
	{
		var nSpaces = (frac.den.length - frac.num.length)>>1;
		var spaceArr1 = new Array(nSpaces), spaceArr2 = new Array(frac.den.length - nSpaces - frac.num.length);
		spaceArr1.fill(" "), spaceArr2.fill(" ");
		frac.num = spaceArr1.join("") + frac.num + spaceArr2.join("");
		frac.len = frac.den.length;
	}
	else
	{
		var nSpaces = (frac.num.length - frac.den.length)>>1;
		var spaceArr1 = new Array(nSpaces), spaceArr2 = new Array(frac.num.length - nSpaces - frac.den.length);
		spaceArr1.fill(" "), spaceArr2.fill(" ");
		frac.den = spaceArr1.join("") + frac.den + spaceArr2.join("");
		frac.len = frac.num.length;
	}
	var dashArr = new Array(frac.len);
	dashArr.fill("\u2014");
	string = string.substring(0,matched.index) + dashArr.join("") + string.substring(matched.index + matched[0].length);
	fracs.push(frac);
	matched = string.match(/\{[^}\/]*\/[^}\/]*\}?/);
}
var topLine = "";
var botLine = "";
var curLoc = 0;
for(var i = 0; i < fracs.length; i++)
{
	var spaceArr = new Array(fracs[i].index - curLoc);
	spaceArr.fill(" ");
	topLine += spaceArr.join("") + fracs[i].num;
	botLine += spaceArr.join("") + fracs[i].den;
	curLoc = fracs[i].index + fracs[i].len;
}
string = topLine + "\n" + string + "\n" + botLine;

return string;

}
function setCol(s){
c.canvasState.setActiveColorRgb(s);
$("#pallette").spectrum("set",s);
var defaultColor = $("#pallette").spectrum("get")
                    for (var t = new Array, a = 0; a < r().project.selectedItems.length; a++)
                        r().project.selectedItems[a].name && (t.push({
                            name: r().project.selectedItems[a].name,
                            color: c.canvasState.activeColorRgb
                        }),
                        r().project.selectedItems[a].name.indexOf("text:") > -1 ? r().project.selectedItems[a].fillColor = c.canvasState.activeColorRgb : r().project.selectedItems[a].name.indexOf("arrow:") > -1 ? (r().project.selectedItems[a].fillColor = c.canvasState.activeColorRgb,
                        r().project.selectedItems[a].strokeColor = c.canvasState.activeColorRgb) : r().project.selectedItems[a].name.indexOf("signature:") > -1 ? (r().project.selectedItems[a].name.indexOf("signature-box:signature:") > -1 && (r().project.selectedItems[a].fillColor = c.canvasState.activeColorRgb,
                        r().project.selectedItems[a].opacity = .2),
                        r().project.selectedItems[a].name.indexOf("signature-border:signature:") > -1 && (r().project.selectedItems[a].strokeColor = c.canvasState.activeColorRgb)) : r().project.selectedItems[a].strokeColor = c.canvasState.activeColorRgb);
                    _.draw(),
                    i.globalSocketObj.emit("item:color:set", Ve(), JSON.stringify(t)),
                    localStorage.setItem("spectrum.defaultColor", JSON.stringify(s));
                    c.canvasState.setActiveColorJson({
                        red: defaultColor.toRgb().r / 255,
        green: defaultColor.toRgb().g / 255,
        blue: defaultColor.toRgb().b / 255,
        alpha: 1,
                    })
                }
function setStrokeWidth(s) {
	if(typeof(s) == 'string')
	{
		localStorage.strokeWidth = s;
	}
	else if(typeof(s) == 'boolean')
	{
		var newIndex = $(".stroke-width")[0].selectedIndex + ((s == true)*2 - 1);
		if(newIndex >= $(".stroke-width")[0].options.length) newIndex--;
		if(newIndex < 0) newIndex = 0;
		$(".stroke-width")[0].selectedIndex = newIndex;
		localStorage.strokeWidth = $(".stroke-width")[0].value;
	}
	$(".stroke-width")[0].selectedIndex = Array.from($(".stroke-width")[0].options).map(function(o){return o.value}).indexOf(localStorage.strokeWidth);
}
function nextFontSize(up) {
var nextIndex = $(".font-size")[0].selectedIndex + (2*up - 1);
if(nextIndex >= $(".font-size")[0].options.length) nextIndex = $(".font-size")[0].options.length - 1;
if(nextIndex < 0) nextIndex = 0;
var fontSize = $(".font-size")[0].options[nextIndex].value;
    localStorage.setItem("fontSize", fontSize);

            var t = fontSize
              , a = r().project.selectedItems;
            if (a)
                for (var o = 0; o < a.length; o++) {
                    var n = a[o];
                    n.fontSize = t,
                    i.globalSocketObj.emit("item:font:change", Ve(), n.name, t),
                    _.draw()
                }
            $(".font-size").prop("selectedIndex",nextIndex);
}          

        function O(e) {
            return (O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function C(e) {
            return function(e) {
                if (Array.isArray(e))
                    return P(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return P(e, t);
                var o = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === o && e.constructor && (o = e.constructor.name);
                if ("Map" === o || "Set" === o)
                    return Array.from(e);
                if ("Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
                    return P(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function P(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var o = 0, a = new Array(t); o < t; o++)
                a[o] = e[o];
            return a
        }
        (0,
        v.initializeJspdfFonts)(),
        s.Z.subscribe(),
        r().tool = new a.Tool;
        var A = r().tool;
        !1 === c.canvasState.readonlyView && (A.onMouseDown = function(e) {
            if (2 === e.which)
                return;
            if (1 == e.event.button)
                return;
            e.event.touches && (ke.cleared = !1,
            e.event.touches.length > 1 && (ke.active = !0,
            ke.cleared = !1));
            if ("cursor" == z || e.event.ctrlKey || 2 == e.event.button || ke.active) {
                he(),
                $("#the-canvas").css("cursor", "grabbing");
                var t = e.point;
                te[0] = [t.x, t.y]
            } else if ("draw" == z || "pencil" == z) {
                t = e.point;
                if (Y = new a.Path,
                "draw" == z)
                    switch (Y.strokeColor = c.canvasState.activeColorRgb,
                    Y.opacity = .4,
                    localStorage.strokeWidth) {
                    case "small":
                        Y.strokeWidth = 5;
                        break;
                    case "large":
                        Y.strokeWidth = 15;
                        break;
                    case "extra-large":
                        Y.strokeWidth = 30;
                        break;
                    case "giant":
                        Y.strokeWidth = 48;
                        break;
                    default:
                        Y.strokeWidth = 10
                    }
                else if ("pencil" == z)
                    switch (Y.strokeColor = c.canvasState.activeColorRgb,
                    Y.opacity = 1,
                    localStorage.strokeWidth) {
                    case "small":
                        Y.strokeWidth = .5;
                        break;
                    case "large":
                        Y.strokeWidth = 6;
                        break;
                    case "extra-large":
                        Y.strokeWidth = 12;
                        break;
                    case "giant":
                        Y.strokeWidth = 48;
                        break;
                    default:
                        Y.strokeWidth = 2
                    }
                Y.strokeCap = "butt",
                t.y += c.staticGlobals.CursorOffsetY / r().project.view.getZoom(),
                Y.add(t),
                c.canvasState.incrementProjectObjectCount(),
                Y.name = c.userState.uid + ":" + c.canvasState.projectObjectCount,
                M = {
                    name: Y.name,
                    page: "page-".concat(Ve()),
                    rgba: c.canvasState.activeColorJson,
                    start: [t.x, t.y],
                    strokeWidth: Y.strokeWidth,
                    opacity: Y.opacity,
                    path: [[t.x, t.y]],
                    end: [],
                    tool: z
                },
                i.globalSocketObj.emit("draw:start", JSON.stringify(M), z)
            } else if ("ellipse" == z)
                K = new a.Path.Ellipse({
                    center: e.downPoint.divide(2).add(e.point.divide(2)),
                    radius: e.point.subtract(e.downPoint).divide(2),
                    strokeColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2,
                    opacity: 1
                }),
                c.canvasState.incrementProjectObjectCount(),
                K.name = c.userState.uid + ":" + c.canvasState.projectObjectCount,
                i.globalSocketObj.emit("ellipse:start", K.name),
                M = {
                    name: K.name,
                    strokeColor: c.canvasState.activeColorRgb,
                    center: e.downPoint.divide(2).add(e.point.divide(2)),
                    radius: e.point.subtract(e.downPoint).divide(2)
                };
            else if ("rectangle" == z)
                X = new a.Path.Rectangle({
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    strokeColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2,
                    opacity: 1
                }),
                c.canvasState.incrementProjectObjectCount(),
                X.name = c.userState.uid + ":" + c.canvasState.projectObjectCount,
                i.globalSocketObj.emit("rectangle:start"),
                M = {
                    name: X.name,
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    strokeColor: c.canvasState.activeColorRgb
                };
            else if ("signature" == z) {
                var o = r().project.hitTest(e.point);
                if (H = !1,
                o && o.item && o.item.name && o.item.name.indexOf("signature:") > -1)
                    return void (H = !0);
                var n = new a.Path.Rectangle({
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    strokeColor: "#000000",
                    fillColor: "#f0f0f0",
                    strokeWidth: 2,
                    opacity: .5
                });
                c.canvasState.incrementProjectObjectCount(),
                n.name = "signature:" + c.userState.uid + ":" + c.canvasState.projectObjectCount,
                M = {
                    name: n.name,
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    strokeColor: "#000000"
                }
            } else if ("line" == z) {
                var s = new a.Path.Line({
                    from: e.downPoint,
                    to: e.point,
                    strokeColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2
                });
                c.canvasState.incrementProjectObjectCount(),
                s.name = "arrow:" + c.userState.uid + ":" + c.canvasState.projectObjectCount,
                i.globalSocketObj.emit("line:start"),
                M = {
                    name: s.name,
                    from: e.downPoint,
                    to: e.point,
                    strokeColor: c.canvasState.activeColorRgb
                }
            } else if ("text" == z) {
                if ((o = r().project.hitTest(e.point)) && o.item && o.item.name && o.item.name.indexOf("text:") > -1 && (G = !0),
                !G)
                    $("#text-editor").is(":visible") && he()
            } else if ("select" == z) {
                var l = {
                    segments: !0,
                    stroke: !0,
                    fill: !0,
                    tolerance: 5
                };
                if (o = r().project.hitTest(e.point, l)) {
                    if (o.item && o.item.name && (o.item.name.indexOf("pdf-page") > -1 || o.item.name.indexOf("border-box") > -1 || o.item.name.indexOf("cursor") > -1)) {
                        J = !0,
                        r().project.activeLayer.selected = !1;
                        for (var d = 0; d < r().project.layers.length; d++)
                            r().project.layers[d].selected = !1;
                        return void (ee = new a.Path.Rectangle({
                            name: "select:band",
                            topLeft: e.downPoint,
                            bottomRight: e.point,
                            strokeColor: "#000",
                            strokeWidth: 1,
                            dashArray: [4, 4],
                            opacity: 1
                        }))
                    }
                    if (e.event.shiftKey) {
                        if (o.item.parent.className.indexOf("Group") > -1)
                            if (o.item.parent.selected) {
                                o.item.parent.selected = !1;
                                for (var u = 0; u < o.item.parent.children.length; u++)
                                    o.item.parent.children[u].selected = !1
                            } else {
                                o.item.parent.selected = !0;
                                for (u = 0; u < o.item.parent.children.length; u++)
                                    o.item.parent.children[u].selected = !0
                            }
                        else
                            o.item.selected = !o.item.selected;
                        return
                    }
                    if (o.item.parent.className.indexOf("Group") > -1) {
                        o.item.parent.selected = !0,
                        o.item.name.indexOf("signature-label:") > -1 ? o.item.selected = !1 : o.item.selected = !0;
                        for (u = 0; u < o.item.parent.children.length; u++)
                            o.item.parent.children[u].name ? o.item.parent.children[u].name.indexOf("signature-label:") > -1 && (o.item.parent.children[u].selected = !1) : o.item.parent.children[u].selected = !0
                    } else
                        o.item.selected = !0;
                    _.draw();
                    var p = new Array;
                    for (u = 0; u < r().project.selectedItems.length; u++) {
                        var g = r().project.selectedItems[u];
                        p.push({
                            name: g._name,
                            originX: g.position.x,
                            originY: g.position.y
                        })
                    }
                    i.globalSocketObj.emit("item:move:start", Ve(), JSON.stringify(p)),
                    $("#the-canvas").css("cursor", "move")
                } else {
                    J = !0,
                    r().project.activeLayer.selected = !1;
                    for (d = 0; d < r().project.layers.length; d++)
                        r().project.layers[d].selected = !1;
                    ee = new a.Path.Rectangle({
                        name: "select-band",
                        topLeft: e.downPoint,
                        bottomRight: e.point,
                        strokeColor: "#000",
                        strokeWidth: 1,
                        dashArray: [4, 4],
                        opacity: 1
                    })
                }
            } else if ("eraser" === z) {
                if (o = r().project.hitTest(e.point, l)) {
                    var h = o.item;
                    "border-box" === h.name || h.name.includes("pdf-page") || h.name.includes("signature") || h.name.includes("image") || (h._parent && h._parent._name && h._parent._name.includes("arrow") && (h = h._parent),
                    h.remove(),
                    i.globalSocketObj.emit("item:remove", Ve(), h.name),
                    _.draw())
                }
            }
        }
        ,
        A.onMouseDrag = function(e) {
            e.event.touches && e.event.touches.length > 1 && (ke.active = !0);
            if (e.event.ctrlKey || 3 == e.event.which || ke.active) {
                if (!ye())
                    return;
                if (!ke.cleared && ("draw" == z || "pencil" == z))
                    clearInterval(D),
                    F = !1,
                    (o = e.point).y = o.y + c.staticGlobals.CursorOffsetY / r().project.view.getZoom(),
                    Y || (Y = new a.Path),
                    Y.length > 10 ? (Y.add(o),
                    (e.modifiers.shift?M.path.push([o.x,o.y]):0),
                    Y.closed = !1,
                    Y.simplify(),
                    i.globalSocketObj.emit("draw:end", Ve(), JSON.stringify(M)),
                    r().project.view.draw(),
                    Y = null,
                    M.end = [o.x, o.y],
                    M.path.length > 5 && i.globalSocketObj.emit("draw:end", Ve(), JSON.stringify(M)),
                    M.path = new Array) : (Y.remove(),
                    M = {});
                if (ke.cleared = !0,
                $("#the-canvas").css("cursor", "grabbing"),
                e.preventDefault(),
                6 == te.length) {
                    te.splice(1, 5);
                    var t = e.point;
                    return te.push([t.x, t.y]),
                    void De(te)
                }
                t = e.point;
                return void te.push([t.x, t.y])
            }
            if (1 == e.event.button || 2 == e.event.button)
                return;
            if (!c.userState.showWhiteboardControls)
                return;
            if ($e.count > 0)
                return;
            if ("cursor" == z) {
                if (!ye())
                    return;
                if ($("#the-canvas").css("cursor", "grabbing"),
                e.preventDefault(),
                6 == te.length) {
                    te.splice(1, 5);
                    t = e.point;
                    return te.push([t.x, t.y]),
                    void De(te)
                }
                t = e.point;
                te.push([t.x, t.y])
            } else if ("draw" == z || "pencil" == z) {
                var o;
                (o = e.point).y += c.staticGlobals.CursorOffsetY / r().project.view.getZoom();
                if(Y)
                {
                	if(!e.modifiers.shift)
					{
						(Y.add(o),
				        M.path.push([o.x, o.y]),
				        F || (i.globalSocketObj.emit("draw:progress", M.name, M.path),
				        D = setInterval((function() {
				            0 != M.path.length && (i.globalSocketObj.emit("draw:progress", M.name, M.path),
				            M.path = new Array)
				        }
				        ), c.staticGlobals.SOCKET_UPDATE_INTERVAL)),
				        F = !0)
					}
					else
					{
						if(M.path.length < 1)
							M.path.push([o.x,o.y])
						if(Y.segments.length > 1)
							Y.removeSegment(Y.segments.length -1);
						Y.add(o);
					}

                }
            } else if ("ellipse" == z)
                K && K.remove(),
                K = new a.Path.Ellipse({
                    name: M.name,
                    center: e.downPoint.divide(2).add(e.point.divide(2)),
                    radius: e.point.subtract(e.downPoint).divide(2),
                    strokeColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2,
                    opacity: 1
                }),
                M.center = e.downPoint.divide(2).add(e.point.divide(2)),
                M.radius = e.point.subtract(e.downPoint).divide(2),
                F || (D = setInterval((function() {
                    i.globalSocketObj.emit("ellipse:progress", Ve(), JSON.stringify(M))
                }
                ), c.staticGlobals.SOCKET_UPDATE_INTERVAL)),
                F = !0;
            else if ("rectangle" == z)
                X && X.remove(),
                X = new a.Path.Rectangle({
                    name: M.name,
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    strokeColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2,
                    opacity: 1
                }),
                M.topLeft = e.downPoint,
                M.bottomRight = e.point,
                F || (D = setInterval((function() {
                    i.globalSocketObj.emit("rectangle:progress", Ve(), JSON.stringify(M))
                }
                ), c.staticGlobals.SOCKET_UPDATE_INTERVAL)),
                F = !0;
            else if ("signature" == z) {
                if (H)
                    return;
                q && q.remove();
                var n = new a.Path.Rectangle({
                    name: "signature-box:" + M.name,
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    fillColor: "#f0f0f0",
                    opacity: .5
                })
                  , s = new a.Path.Rectangle({
                    name: "signature-border:" + M.name,
                    topLeft: e.downPoint,
                    bottomRight: e.point,
                    strokeColor: "#000000",
                    strokeWidth: 2
                });
                q = new a.Group({
                    name: "signature:" + M.name,
                    children: [n, s]
                })
            } else if ("line" == z) {
                Q && Q.remove();
                var l = new a.Path.Line({
                    name: "arrow-line:" + M.name,
                    from: e.downPoint,
                    to: e.point,
                    strokeColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2
                })
                  , d = (t = l.lastSegment.point).subtract(e.downPoint)
                  , u = d.normalize(18)
                  , p = d.normalize(4).add(t)
                  , g = new a.Path({
                    name: "arrow-head:" + M.name,
                    segments: [p.add(u.rotate(155)), p, p.add(u.rotate(-155))],
                    fillColor: c.canvasState.activeColorRgb,
                    strokeWidth: 2
                });
                Q = new a.Group({
                    name: "arrow:" + M.name,
                    children: [l, g]
                }),
                M.to = e.point,
                F || (D = setInterval((function() {
                    i.globalSocketObj.emit("line:progress", Ve(), JSON.stringify(M))
                }
                ), c.staticGlobals.SOCKET_UPDATE_INTERVAL)),
                F = !0
            } else if ("select" == z)
                if (J) {
                    ee && ee.remove(),
                    ee = new a.Path.Rectangle({
                        name: "select-band",
                        topLeft: e.downPoint,
                        bottomRight: e.point,
                        strokeColor: "#000",
                        strokeWidth: 1,
                        dashArray: [4, 4],
                        opacity: 1
                    });
                    for (var h = 0; h < r().project.activeLayer.children.length; h++)
                        r().project.activeLayer.children[h].name && -1 == r().project.activeLayer.children[h].name.indexOf("pdf-page") && -1 == r().project.activeLayer.children[h].name.indexOf("select-band") && -1 == r().project.activeLayer.children[h].name.indexOf("border-box") && -1 == r().project.activeLayer.children[h].name.indexOf("cursor") && (r().project.activeLayer.children[h].intersects(ee) || r().project.activeLayer.children[h].isInside(ee.handleBounds) ? r().project.activeLayer.children[h].selected = !0 : r().project.activeLayer.children[h].selected = !1);
                    _.draw()
                } else {
                    for (h = 0; h < r().project.selectedItems.length; h++) {
                        var f = r().project.selectedItems[h];
                        f.name && -1 == f.name.indexOf("arrow-line:") && -1 == f.name.indexOf("arrow-head:") && -1 == f.name.indexOf("signature-label:") && -1 == f.name.indexOf("signature-box:") && -1 == f.name.indexOf("signature-border:") && (f.position.x += e.delta.x,
                        f.position.y += e.delta.y)
                    }
                    r().project.selectedItems && (B ? (B.x += e.delta.x,
                    B.y += e.delta.y) : B = e.delta),
                    oe || (W = setInterval((function() {
                        if (B) {
                            for (var e = new Array, t = 0; t < r().project.selectedItems.length; t++) {
                                var o = r().project.selectedItems[t];
                                e.push(o._name)
                            }
                            i.globalSocketObj.emit("item:move:progress", Ve(), e, B),
                            B = null
                        }
                    }
                    ), 50)),
                    oe = !0
                }
            else if ("cursor" == z) {
                if (ne + c.staticGlobals.SOCKET_UPDATE_INTERVAL < e.timeStamp) {
                    var m = e.point.y
                      , v = e.point.x;
                    ne = e.timeStamp,
                    re({
                        x: v,
                        y: m,
                        color: c.canvasState.activeColorRgb,
                        userFullname: c.userState.myFullName
                    })
                }
            } else if ("eraser" === z) {
                var b = {
                    segments: !0,
                    stroke: !0,
                    fill: !0,
                    tolerance: 5
                }
                  , y = r().project.hitTest(e.point, b);
                if (y) {
                    var w = y.item;
                    w.name && ("border-box" === w.name || w.name.includes("pdf-page") || w.name.includes("signature") || w.name.includes("image") || (w._parent && w._parent._name && w._parent._name.includes("arrow") && (w = w._parent),
                    i.globalSocketObj.emit("item:remove", Ve(), w.name),
                    _.draw(),
                    w.remove()))
                }
            }
        }
        //! Prevent right click context menu in canvas
        ,
        A.onMouseUp = function(e) {
            if (1 == e.event.button)
                return;
            if (2 === e.event.button) {
                switch (z) {
                case "cursor":
                    $("#the-canvas").css("cursor", "grab");
                    break;
                case "draw":
                case "pencil":
                case "eraser":
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    });
                    break;
                case "ellipse":
                case "rectangle":
                case "line":
                case "signature":
                    $("#the-canvas").css("cursor", "crosshair");
                    break;
                case "text":
                    $("#the-canvas").css("cursor", "text");
                    break;
                case "checkmark":
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    });
                    break;
                case "select":
                default:
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    })
                }
                te.splice(0, te.length)
            } else if ("cursor" == z || e.event.ctrlKey || ke.active) {
                switch (z) {
                case "cursor":
                    $("#the-canvas").css("cursor", "grab");
                    break;
                case "draw":
                case "pencil":
                case "eraser":
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    });
                    break;
                case "ellipse":
                case "rectangle":
                case "line":
                case "signature":
                    $("#the-canvas").css("cursor", "crosshair");
                    break;
                case "text":
                    $("#the-canvas").css("cursor", "text");
                    break;
                case "checkmark":
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    });
                    break;
                case "select":
                default:
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    })
                }
                te.splice(0, te.length)
            } else if ("draw" == z || "pencil" == z) {
                clearInterval(D),
                F = !1,
                (t = e.point).y = t.y + c.staticGlobals.CursorOffsetY / r().project.view.getZoom(),
                Y || (Y = new a.Path),
                Y.add(t),
                (e.modifiers.shift?M.path.push([t.x,t.y]):0),
                Y.closed = !1,
                Y.simplify(),
                r().project.view.draw(),
                Y = null,
                M.end = [t.x, t.y],
                i.globalSocketObj.emit("draw:end", Ve(), JSON.stringify(M)),
                M.path = new Array
            } else if ("ellipse" == z || "rectangle" == z || "line" == z)
                "ellipse" == z && (K = null),
                "rectangle" == z && (X = null),
                "line" == z && (Q = null),
                i.globalSocketObj.emit(z + ":end", Ve(), JSON.stringify(M)),
                clearInterval(D),
                M.path = new Array,
                F = !1;
            else if ("signature" == z) {
                if (null == q || H)
                    return;
                var t, o = "signature-label:" + M.name, n = {
                    point: t = new a.Point((e.point.x + e.downPoint.x) / 2,(e.point.y + e.downPoint.y) / 2),
                    content: "Please Sign Here",
                    fillColor: "#000",
                    fontFamily: "Courier New",
                    fontWeight: "bold",
                    fontSize: 12,
                    justification: "center",
                    name: o
                }, s = new a.PointText(n);
                M.topLeft = e.downPoint,
                M.bottomRight = e.point,
                s.visible = !0,
                q.addChild(s),
                q.onClick = ge,
                ge(null),
                _.draw(),
                q = null,
                clearInterval(D),
                F = !1
            } else if ("text" == z) {
                if (G)
                    return void (G = !1);
                if (V)
                    return;
                V = !0;
                var l = $("#text-editor");
                l.text("");
                var d = 12;
                localStorage.fontSize && (d = localStorage.fontSize),
                l.css({
                    color: c.canvasState.activeColorRgb,
                    top: e.event.layerY - d * r().project.view.getZoom(),
                    left: e.event.layerX,
                    paddingLeft: "1px",
                    fontSize: d * r().project.view.getZoom(),
                    fontFamily: "Courier New",
                    fontWeight: "bold"
                });
                var u = r().project.activeLayer.getName()
                  , p = "text:" + u + ":" + c.userState.uid + ":" + (new Date).getTime()
                  , g = {
                    userId: c.userState.uid,
                    name: p,
                    page: u,
                    point: [e.point.x, e.point.y],
                    color: c.canvasState.activeColorRgb,
                    content: "",
                    fontFamily: "Courier New",
                    fontWeight: "bold",
                    fontSize: d,
                    createdAt: (new Date).getTime(),
                    zoom: r().project.view.getZoom()
                };
                i.globalSocketObj.emit("text:add", Ve(), JSON.stringify(g), d, r().project.view.getZoom(), (function(e) {
                    l.data("current-point-text-name", e).on("blur.updateCanvas", he).on("keydown.updateText", de).on("keyup.updateText", ue).show().focus()
                }));
                if(window.firstTime)
                {
                	l.data("current-point-text-name", e).on("paste",le);
                	window.firstTime = false;
                }
            } else if ("smiley" == z) {
            console.log(window.smileyStamp);
                createTBox(window.smileyStamp, c.canvasState.activeColorRgb,24, e.downPoint.x-12,e.downPoint.y+12);
            }  else if ("checkmark" == z) {
            	var zoomFactor = 1/(r().project.view.getZoom()*0.18+2);
  				var sf = window.sf*zoomFactor;
                var h = e.downPoint
                  , f = h.x - 3.5 / r().project.view.getZoom()
                  , m = h.y - 3.5 / r().project.view.getZoom()
                  , v = [{
                    x: f,
                    y: m
                }, {
                    x: f + 4 / r().project.view.getZoom(),
                    y: m + 6 / r().project.view.getZoom()
                }, {
                    x: f + 14 / r().project.view.getZoom(),
                    y: m - 4 / r().project.view.getZoom()
                }]
                  , b = 4 / r().project.view.getZoom();
                if(window.altcheck)
                {
		            v = [{
		                x: f,
		                y: m
		            }, {
		                x: f + sf*5,
		                y: m + sf*5
		            }, {
		                x: f + sf*11,
		                y: m - sf*10
		            }]
		        }
                c.canvasState.incrementProjectObjectCount();
                var y = {
                    name: new a.Path({
                        name: "checkmark:" + c.userState.uid + ":" + c.canvasState.projectObjectCount,
                        strokeColor: (window.useAltColor?window.mod.col:c.canvasState.activeColorRgb),
                        strokeWidth: sf*4,
                        segments: v,
                        closed: !1
                    }).name,
                    pointX: f,
                    pointY: m,
                    strokeColor: (window.useAltColor?window.mod.col:c.canvasState.activeColorRgb),
                    segments: v,
                    strokeWidth: sf*4
                };
                i.globalSocketObj.emit("checkmark:add", Ve(), JSON.stringify(y))
            } else if ("select" == z) {
                if (J)
                    J = !1,
                    void 0 !== r().project.activeLayer.children["select-band"] && r().project.activeLayer.children["select-band"].remove(),
                    _.draw();
                else {
                    if (clearInterval(W),
                    B) {
                        for (var w = new Array, S = 0; S < r().project.selectedItems.length; S++) {
                            var j = r().project.selectedItems[S];
                            w.push(j._name)
                        }
                        i.globalSocketObj.emit("item:move:end", Ve(), w, B)
                    } else
                        i.globalSocketObj.emit("item:move:end", Ve(), w, new a.Point(0,0));
                    B = null,
                    oe = !1
                }
                r().project.selectedItems.length > 0 && $("#the-canvas").css("cursor", "move")
            }
        }
        ,
        A.onMouseMove = function(e) {
            if (c.userState.showWhiteboardControls) {
                if (e.event.ctrlKey)
                    return void $("#the-canvas").css("cursor", "grab");
                if ("select" == z) {
                    var t = {
                        segments: !0,
                        stroke: !0,
                        fill: !0,
                        tolerance: 5
                    };
                    if (r().project.activeLayer.children.length > 0)
                        for (var o = 0; o < r().project.activeLayer.children.length; o++) {
                            if (i = r().project.activeLayer.children[o].hitTest(e.point, t)) {
                                if (i.item && i.item.name) {
                                    if (-1 == i.item.name.indexOf("pdf-page")) {
                                        $("#the-canvas").css("cursor", "move");
                                        break
                                    }
                                    $("#the-canvas").css("cursor", "crosshair")
                                }
                            } else
                                $("#the-canvas").css("cursor", "crosshair")
                        }
                } else if ("text" == z) {
                    t = {
                        segments: !0,
                        stroke: !0,
                        fill: !0,
                        tolerance: 5
                    };
                    if (r().project.activeLayer.children.length > 0)
                        for (o = 0; o < r().project.activeLayer.children.length; o++) {
                            if (i = r().project.activeLayer.children[o].hitTest(e.point, t)) {
                                if (i.item && i.item.name) {
                                    if (i.item.name.indexOf("text:") > -1) {
                                        $("#the-canvas").css("cursor", "cell");
                                        break
                                    }
                                    $("#the-canvas").css("cursor", "text")
                                }
                            } else
                                $("#the-canvas").css("cursor", "text")
                        }
                } else if ("signature" == z) {
                    t = {
                        segments: !0,
                        stroke: !0,
                        fill: !0,
                        tolerance: 5
                    };
                    if (r().project.activeLayer.children.length > 0)
                        for (o = 0; o < r().project.activeLayer.children.length; o++) {
                            if (i = r().project.activeLayer.children[o].hitTest(e.point, t)) {
                                if (i.item && i.item.name) {
                                    if (i.item.name.indexOf("signature:") > -1) {
                                        if (i.item.parent && i.item.parent.name.indexOf("signature:signature:") > -1 && i.item.parent.data.hasBeenSigned)
                                            break;
                                        $("#the-canvas").css("cursor", "pointer");
                                        break
                                    }
                                    $("#the-canvas").css("cursor", "crosshair")
                                }
                            } else
                                $("#the-canvas").css("cursor", "crosshair")
                        }
                } else if ("cursor" == z) {
                    t = {
                        segments: !0,
                        stroke: !0,
                        fill: !0,
                        tolerance: 5
                    };
                    if (r().project.activeLayer.children.length > 0)
                        for (o = 0; o < r().project.activeLayer.children.length; o++) {
                            if (i = r().project.activeLayer.children[o].hitTest(e.point, t)) {
                                if (i.item && i.item.name)
                                    if (i.item.name.indexOf("signature:") > -1) {
                                        if (i.item.parent.data && i.item.parent.data.forUserId && i.item.parent.data.forUserId == c.userState.uid)
                                            return $("#the-canvas").css("cursor", "pointer"),
                                            void vt(c.userState.uid)
                                    } else
                                        $("#the-canvas").css("cursor", "grab")
                            } else
                                $("#the-canvas").css("cursor", "grab")
                        }
                }
                if (ne + c.staticGlobals.SOCKET_UPDATE_INTERVAL < e.timeStamp && r().project.activeLayer.name) {
                    var a = e.point.y
                      , n = e.point.x;
                    "draw" == z || "pencil" == z ? a += c.staticGlobals.CursorOffsetY / r().project.view.getZoom() : "checkmark" == z && (n += 10 / r().project.view.getZoom(),
                    a += 10 / r().project.view.getZoom()),
                    ne = e.timeStamp,
                    re({
                        x: n,
                        y: a,
                        color: c.canvasState.activeColorRgb,
                        userFullname: c.userState.myFullName
                    })
                }
            } else {
                t = {
                    segments: !0,
                    stroke: !0,
                    fill: !0,
                    tolerance: 5
                };
                if (r().project.activeLayer.children.length > 0)
                    for (o = 0; o < r().project.activeLayer.children.length; o++) {
                        var i;
                        if (i = r().project.activeLayer.children[o].hitTest(e.point, t)) {
                            if (i.item && i.item.name) {
                                if (i.item.name.indexOf("signature:") > -1) {
                                    $("#the-canvas").css("cursor", "pointer");
                                    break
                                }
                                $("#the-canvas").css("cursor", "crosshair")
                            }
                        } else
                            $("#the-canvas").css("cursor", "crosshair")
                    }
            }
        }
        ,
        A.onKeyDown = function(e) {
		if(window.calcToolFocus) return;
            if (ye())
                switch (e.key) {
                case "+":
                    $("#text-editor").is(":hidden") && Ee(null, null, "zoom-in");
                    break;
                case "-":
                    $("#text-editor").is(":hidden") && Ee(null, null, "zoom-out");
                    break;
                case "left":
                    if ($("#text-editor").is(":hidden"))
                        if (e.event.ctrlKey) {
                            if ($("#select-page")[0].selectedIndex > 0) {
                                $("#select-page").prop("selectedIndex",$("#select-page")[0].selectedIndex-1);
                                $("#select-page").change();
                                //var t = parseInt($("#select-page option:selected").val()) - 1;
                                //$('#select-page option[value="' + t + '"]').prop("selected", !0).change()
                            }
                        } else
                            Be(-100, "x");
                    break;
                case "right":
                    if ($("#text-editor").is(":hidden"))
                        if (e.event.ctrlKey) {
                            if ($("#select-page")[0].selectedIndex < $("#select-page option").length-1) {
                                $("#select-page").prop("selectedIndex",$("#select-page")[0].selectedIndex+1);
                                $("#select-page").change();
                               // t = parseInt($("#select-page option:selected").val()) + 1;
                                //$('#select-page option[value="' + t + '"]').prop("selected", !0).change()
                            }
                        } else
                            Be(100, "x");
                    break;
                case "up":
                    $("#text-editor").is(":hidden") && Be(-150, "y");
                    break;
                case "down":
                    $("#text-editor").is(":hidden") && Be(150, "y")
                }
            if ("select" == z) {
                var o = null;
                "up" == e.key ? o = new (r().Point)(0,-1) : "down" == e.key ? o = new (r().Point)(0,1) : "left" == e.key ? o = new (r().Point)(-1,0) : "right" == e.key && (o = new (r().Point)(1,0)),
                o && function(e) {
                    if (!e)
                        return;
                    if (r().project.selectedItems.length < 1)
                        return;
                    for (var t = new Array, o = 0; o < r().project.selectedItems.length; o++) {
                        var a = r().project.selectedItems[o];
                        a.position.x += e.x,
                        a.position.y += e.y,
                        t.push(a._name)
                    }
                    _.draw()
                }(o),
                r().project.selectedItems && o && (ie ? ie += o : ie = o),
                !ce && o && (se = setInterval((function() {
                    if (ie) {
                        for (var e = new Array, t = 0; t < r().project.selectedItems.length; t++) {
                            var o = r().project.selectedItems[t];
                            e.push(o._name)
                        }
                        i.globalSocketObj.emit("item:move:progress", Ve(), e, ie),
                        ie = null
                    }
                }
                ), c.staticGlobals.SOCKET_UPDATE_INTERVAL)),
                ce = !0
            }
            if($("#text-editor").is(":hidden")&&window.modKeys&&!window.calcToolFocus)
    {
        switch(e.key)
        {
case "w":

    window.updateTool("cursor");

break;
            case "t":
window.updateTool("text");
                break;
            case "v":
window.updateTool("checkmark");
                break;
            case "c":
window.updateTool("ellipse");
                break;
case "x":
window.updateTool("rectangle");
break;
            case "a":
window.updateTool("pencil");
                break;
case "e":
window.updateTool("eraser");
break;
case "h":
window.updateTool("highlighter");
M = "draw";
break;
case "m":
window.updateTool("select");
                break;
            case "q":
                localStorage.setItem("selectedTool", "checkmark");
var dt = new Date();
  window.createTBox(window.mod.inl + " " + (dt.getMonth()+1)+"/"+dt.getDate()+"/"+(dt.getYear()%100), window.mod.col,12,0,-240);
  r().project.activeLayer.selected = false;
                break;
            case "f":
                c.canvasState.toggleAsync(Ve())
                break;
case "1":
setCol(window.mod.col);
break;
case "2":
setCol("#ff0000");
break;
case "3":
setCol("#6aa84f")
break;
case "4":
setCol("#4a86ea");
break;
case "5":
setCol("#1c4587");
break;
case "6":
setCol("#000000");
break;
case "7":
setCol("#ffffff");
break;
case "8":
setCol("#777777");
break;
case "9":
setCol("#bcbcbc");
break;
case "s":
nextFontSize(false);
break;
case "d":
nextFontSize(true);
break;
case "k":
setStrokeWidth("small");
break;
case "j":
setStrokeWidth("medium");
break;
case "l":
setStrokeWidth("large");
break;
case "o":
setStrokeWidth("extra-large");
break;
case ";":
setStrokeWidth("giant");
break;
}
}
        }
        ,
        A.onKeyUp = function(e) {
            if ("control" == e.key)
                switch (z) {
                case "cursor":
                    $("#the-canvas").css("cursor", "grab");
                    break;
                case "draw":
                case "pencil":
                case "eraser":
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    });
                    break;
                case "ellipse":
                case "rectangle":
                case "line":
                case "signature":
                    $("#the-canvas").css("cursor", "crosshair");
                    break;
                case "text":
                    $("#the-canvas").css("cursor", "text");
                    break;
                case "checkmark":
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    });
                    break;
                case "select":
                default:
                    $("#the-canvas").css({
                        cursor: "crosshair"
                    })
                }
            if (46 == e.event.keyCode) {
                var t = r().project.selectedItems;
                if (t)
                    for (var o = 0; o < t.length; o++) {
                        var n = t[o];
                        i.globalSocketObj.emit("item:remove", Ve(), n.name),
                        n.remove(),
                        _.draw()
                    }
                i.globalSocketObj.emit("item:remove:end", Ve(), c.staticGlobals.room)
            }
            if (e.event.target && e.event.target.nodeName && "body" != e.event.target.nodeName.toLowerCase())
                return;
            if ("select" == z) {
                if (clearInterval(se),
                ie) {
                    var s = new Array;
                    for (o = 0; o < r().project.selectedItems.length; o++) {
                        n = r().project.selectedItems[o];
                        s.push(n._name)
                    }
                    i.globalSocketObj.emit("item:move:end", Ve(), s, ie)
                } else
                    i.globalSocketObj.emit("item:move:end", Ve(), s, new a.Point(0,0));
                return ie = null,
                ce = !1,
                e.preventDefault(),
                !1
            }
        }
        );
        var L, x, T, I, _ = r().view, E = 2, R = 4, N = 5, U = [];
        $((function() {
            $("#readjust-raster").click((function() {
                for (var e = "page-" + $("#select-page").val(), t = 0; t < r().project.layers[e].children.length; t++)
                    r().project.layers[e].children[t].name.indexOf("pdf-page") > -1 && "raster" == r().project.layers[e].children[t].className.toLowerCase() && (c.canvasState.setAspectRatio(r().project.layers[e].data.aspectRatio),
                    console.log("view: %dx%d, raster: %dx%d, aspect ratio: %f", r().project.view.bounds.width, r().project.view.bounds.height, r().project.layers[e].children[t].bounds.width, r().project.layers[e].children[t].bounds.height, c.canvasState.aspectRatio),
                    me(!1, !1),
                    r().project.layers[e].children[t].position = r().project.view.center,
                    r().project.layers[e].children[t].fitBounds(r().project.view.bounds))
            }
            ));
            var e = JSON.parse(localStorage.getItem("spectrum.defaultColor"));
            e = null == e ? tinycolor("#4a86e8") : tinycolor(e),
            c.canvasState.setActiveColorRgb(e.toHexString()),
            c.canvasState.setActiveColorJson({
                red: e.toRgb().r / 255,
                green: e.toRgb().g / 255,
                blue: e.toRgb().b / 255,
                alpha: 1
            }),
            $(".tooltip").tooltipster(),
            $("#canvas-scroller").click((function(e) {
                if ("canvas-scroller" == e.target.id) {
                    r().project.activeLayer.selected = !1;
                    for (var t = 0; t < r().project.layers.length; t++)
                        r().project.layers[t].selected = !1;
                    _.draw()
                }
            }
            )),
            $("#pallette").spectrum({
                color: e,
                showInput: !0,
                className: "full-spectrum",
                showInitial: !0,
                showPalette: !0,
                hideAfterPaletteSelect: !0,
                showButtons: !1,
                showSelectionPalette: !0,
                maxSelectionSize: 10,
                preferredFormat: "hex",
                localStorageKey: "spectrum.draw",
                change: function(e) {
                    c.canvasState.setActiveColorRgb(e.toHexString());
                    for (var t = new Array, o = 0; o < r().project.selectedItems.length; o++)
                        r().project.selectedItems[o].name && (t.push({
                            name: r().project.selectedItems[o].name,
                            color: c.canvasState.activeColorRgb
                        }),
                        r().project.selectedItems[o].name.indexOf("text:") > -1 ? r().project.selectedItems[o].fillColor = c.canvasState.activeColorRgb : r().project.selectedItems[o].name.indexOf("arrow:") > -1 ? (r().project.selectedItems[o].fillColor = c.canvasState.activeColorRgb,
                        r().project.selectedItems[o].strokeColor = c.canvasState.activeColorRgb) : r().project.selectedItems[o].name.indexOf("signature:") > -1 ? (r().project.selectedItems[o].name.indexOf("signature-box:signature:") > -1 && (r().project.selectedItems[o].fillColor = c.canvasState.activeColorRgb,
                        r().project.selectedItems[o].opacity = .2),
                        r().project.selectedItems[o].name.indexOf("signature-border:signature:") > -1 && (r().project.selectedItems[o].strokeColor = c.canvasState.activeColorRgb)) : r().project.selectedItems[o].strokeColor = c.canvasState.activeColorRgb);
                    _.draw(),
                    i.globalSocketObj.emit("item:color:set", Ve(), JSON.stringify(t)),
                    localStorage.setItem("spectrum.defaultColor", JSON.stringify(e.toHexString()));
                    var a = e.toRgb();
                    c.canvasState.setActiveColorJson({
                        red: a.r / 255,
                        green: a.g / 255,
                        blue: a.b / 255,
                        alpha: 1
                    })
                },
                palette: [["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"], ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"], ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)", "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)", "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)", "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)", "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)", "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)", "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)", "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)", "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]]
            }),
            r().tool.minDistance = 1,
            r().tool.maxDistance = 45,
            $("#the-canvas").css("cursor", "pointer"),
            $(".close-whiteboard").click((function() {
                window.parent && window.parent.postMessage({
                    action: "close-whiteboard",
                    room: c.staticGlobals.room || ""
                }, "*")
            }
            )),
            $("#delete-signature-field").click((function() {
                var e = $("#assign-signature-user-dialog").data("target-object");
                r().project.activeLayer.children[e] && (r().project.activeLayer.children[e].remove(),
                i.globalSocketObj.emit("item:remove", Ve(), e)),
                $("#assign-signature-user-dialog").modal("hide")
            }
            )),
            $("#select-whiteboard-user").click((function() {
                var e = $("#assign-signature-user-dialog").data("remove-target-object")
                  , t = $("#assign-signature-user-dialog").data("target-object")
                  , o = t.replace("signature:signature:", "signature:")
                  , n = null
                  , s = $("#selected-whiteboard-user option:selected").val()
                  , l = $("#selected-whiteboard-user option:selected").text();
                if (M.forUserId = s,
                M.forUserFullname = l,
                r().project.activeLayer.children[t]) {
                    if (!e && r().project.activeLayer.children[t].data && r().project.activeLayer.children[t].data.forUserId && (n = r().project.activeLayer.children[t].data.forUserId,
                    r().project.activeLayer.children[t].data.forUserId == s))
                        return void $("#assign-signature-user-dialog").modal("hide");
                    r().project.activeLayer.children[t].data.forUserId = s,
                    r().project.activeLayer.children[t].data.forUserFullname = l,
                    s != c.userState.uid && r().project.activeLayer.children[t].children["signature-label:" + o] && (r().project.activeLayer.children[t].children["signature-label:" + o].content = l + "'s Signature")
                }
                if (e)
                    i.globalSocketObj.emit("signature:end", Ve(), JSON.stringify(M));
                else {
                    var d = r().project.activeLayer.children[t].strokeBounds
                      , u = r().project.activeLayer.children[t].children["signature-box:" + o].fillColor.toCSS(!0)
                      , p = {
                        forUserId: s,
                        fromUserId: n,
                        forUserFullname: l,
                        targetObjectName: o,
                        topLeft: d.point,
                        bottomRight: new a.Point(d.point.x + d.width,d.point.y + d.height),
                        strokeColor: u
                    };
                    i.globalSocketObj.emit("signature:update", Ve(), JSON.stringify(p))
                }
                M.path = new Array,
                $("#assign-signature-user-dialog").modal("hide"),
                s == c.userState.uid && alert("You have created a signature field for yourself!\n\nTo sign this field, switch to the pointer tool and click on 'Please Sign Here'.")
            }
            )),
            $("#cancel-signature-dialog").click((function() {
                var e = $("#assign-signature-user-dialog").data("remove-target-object")
                  , t = $("#assign-signature-user-dialog").data("target-object");
                e && "" != t && r().project.activeLayer.children[t] && r().project.activeLayer.children[t].remove(),
                $("#assign-signature-user-dialog").modal("hide")
            }
            )),
            $("#add-user-signature").click((function() {
                var e = $("#user-signature-dialog").data("scope")
                  , t = $("#user-signature-dialog").data("signatureName")
                  , o = $("#user-signature-dialog").data("signatureTarget");
                if ("ALL" === $("#user-signature-dialog").data("signatureTarget"))
                    try {
                        st.forEach((function(e, t) {
                            a(o = e.itemName, t)
                        }
                        ))
                    } catch (e) {
                        alert(e)
                    }
                else
                    try {
                        a(o, null)
                    } catch (e) {
                        alert(e)
                    }
                function a(o, a) {
                    e.project.activeLayer.children[t].fitBounds(r().project.activeLayer.children[o].bounds);
                    var n = e.project.activeLayer.children[t].children;
                    if (0 == n.length)
                        throw err = "No Signature found";
                    if (void 0 !== n[0].content && !n[0].content)
                        throw err = "No Signature found";
                    if (r().activate(),
                    r().project.activeLayer.children[o]) {
                        for (var s = 0; s < r().project.activeLayer.children[o].children.length; s++)
                            r().project.activeLayer.children[o].children[s].name ? -1 == r().project.activeLayer.children[o].children[s].name.indexOf("signature-box:signature:") && -1 == r().project.activeLayer.children[o].children[s].name.indexOf("signature-border:signature:") && (r().project.activeLayer.children[o].children[s].remove(),
                            s--) : (r().project.activeLayer.children[o].children[s].remove(),
                            s--);
                        var l = [];
                        n.forEach((function(e) {
                            var t = e.exportJSON();
                            r().project.activeLayer.children[o].importJSON(t),
                            l.push(t)
                        }
                        ));
                        var d = o.replace("signature:signature:", "signature-box:signature:");
                        r().project.activeLayer.children[o].children[d] && (r().project.activeLayer.children[o].children[d].opacity = .2,
                        r().project.activeLayer.children[o].children[d].bringToFront(),
                        r().project.activeLayer.children[o].data.hasBeenSigned = !0)
                    }
                    i.globalSocketObj.emit("signature:signed", Ve(), o, JSON.stringify(l)),
                    c.canvasState.setActiveSigning(!1),
                    null !== a ? a === st.length - 1 && ($("#user-signature-dialog").modal("hide"),
                    e.clear(),
                    c.canvasState.setSignatureFieldCount(0),
                    ct(r().project.activeLayer.name.split("-")[1], c.userState.uid),
                    $("#finished-signing-dialog").modal("show"),
                    $("#switch-signature-type").click()) : ($("#user-signature-dialog").modal("hide"),
                    e.clear(),
                    c.canvasState.setSignatureFieldCount(c.canvasState.mySignatureFieldCount - 1),
                    c.canvasState.mySignatureFieldCount <= 0 && (ct(r().project.activeLayer.name.split("-")[1], c.userState.uid),
                    $("#finished-signing-dialog").modal("show"),
                    $("#switch-signature-type").click()))
                }
            }
            )),
            $("#finished-signing").click((function() {
                alert("Thank you for signing!  An email has been sent to the owner of this whiteboard confirming your signature."),
                $("#finished-signing-dialog").modal("hide");
                $("#user-signature-dialog").data("signatureTarget");
                i.globalSocketObj.emit("signature:signing-done", Ve())
            }
            )),
            $("#cancel-user-signature").click((function() {
                $("#user-signature-dialog").data("scope").project.activeLayer.removeChildren(),
                $("#signature-input").val(""),
                $(".font-selection").text("Example"),
                $(".typing-signature").hide(),
                $("#switch-signature-type i").removeClass("fa-pencil-alt"),
                $("#switch-signature-type i").addClass("fa-font"),
                $("#signature-instruction").text("Draw slowly to create your signature"),
                c.canvasState.setActiveSigning(!1),
                $("#user-signature-dialog").modal("hide"),
                $("#typing-signature-cover").css("width", 0),
                $("#typing-signature-cover").css("height", 0)
            }
            )),
            $("#user-signature-dialog").on("shown.bs.modal", (function() {
                var e = new (r().PaperScope);
                e.setup($("#signature-canvas")[0]),
                $("#user-signature-dialog").data("scope", e);
                var t, o, a = $("#signature-canvas").width(), n = $("#signature-canvas").height();
                e.project.view.setViewSize($("#signature-canvas").width(), $("#signature-canvas").height());
                var i = function(o) {
                    var r = new o.Path;
                    r.strokeColor = "#555",
                    r.strokeWidth = 1,
                    r.add(new o.Point(20,n - 10)),
                    r.add(new o.Point(a - 20,n - 10)),
                    (r = new o.Path).strokeColor = "#555",
                    r.strokeWidth = 2,
                    r.add(new o.Point(20,n - 26)),
                    r.add(new o.Point(28,n - 16)),
                    (r = new o.Path).strokeColor = "#555",
                    r.strokeWidth = 2,
                    r.add(new o.Point(28,n - 26)),
                    r.add(new o.Point(20,n - 16)),
                    t = new e.Group,
                    c.canvasState.incrementProjectObjectCount(),
                    t.name = "signed-signature:" + c.userState.uid + ":" + c.canvasState.projectObjectCount,
                    $("#user-signature-dialog").data("signatureName", t.name)
                };
                i(e);
                var s = new e.Tool;
                s.minDistance = 1,
                s.maxDistance = 7;
                var l = []
                  , d = function() {
                    l = [];
                    for (var e = 0; e < 15; e++)
                        l.push(s.maxDistance)
                };
                s.onMouseDown = function(t) {
                    (Z = new e.Path).fillColor = "#000",
                    Z.add(t.point),
                    d()
                }
                ,
                s.onMouseDrag = function(e) {
                    var t = function(e) {
                        for (var t = 0, o = 0; o < 15; o++)
                            t += l[o];
                        var a = (t += e) / 16;
                        return l.push(e),
                        l.shift(),
                        a
                    }(e.delta.length)
                      , o = s.maxDistance + s.minDistance - t
                      , a = e.delta.normalize(o).divide(2);
                    a.angle += 90;
                    var r = e.middlePoint.add(a)
                      , n = e.middlePoint.subtract(a);
                    Z.add(r),
                    Z.insert(0, n),
                    Z.smooth()
                }
                ,
                s.onMouseUp = function(e) {
                    Z.add(e.point),
                    Z.closed = !1,
                    Z.smooth(),
                    Z.reduce(),
                    Z.addTo(t),
                    d()
                }
                ,
                $("#clear-signature").off().click((function() {
                    e.activate(),
                    e.project.activeLayer.removeChildren(),
                    t.removeChildren(),
                    $("#signature-input").val(""),
                    $(".font-selection").text("Example"),
                    i(e)
                }
                ));
                var u = !1;
                function p(t) {
                    o ? o.fontFamily = h(t) : o = new e.PointText({
                        point: [35, n - 10],
                        content: $("#signature-input").val(),
                        fillColor: "black",
                        fontFamily: h(t),
                        fontWeight: "bold",
                        fontSize: 50
                    })
                }
                "ALL" === $("#user-signature-dialog").data("signatureTarget") ? (st.length > 1 ? $("#add-user-signature").text("Sign ALL and Complete") : $("#add-user-signature").text("Sign and Complete"),
                $(".signature-form-title").text("Signing ALL assigned Fields"),
                $(".signature-form-subtitle").show(),
                $("#switch-signature-type").show()) : ($(".signature-form-title").text("Signature Form"),
                $(".signature-form-subtitle").hide(),
                $("#switch-signature-type").show(),
                $(".typing-signature").hide(),
                $("#switch-signature-type i").removeClass("fa-pencil-alt"),
                $("#switch-signature-type i").addClass("fa-font"),
                $("#signature-instruction").text("Draw slowly to create your signature"),
                $("#typing-signature-cover").css("width", 0),
                $("#typing-signature-cover").css("height", 0),
                $("#add-user-signature").text("Sign and Complete"),
                t.removeChildren()),
                $(".font-selection").click((function() {
                    g = $(this).attr("id"),
                    $(".font-selection").css("color", "black"),
                    $(".font-selection").css("background-color", "#f1f3f6"),
                    $("#" + g).css("color", "var(--primary-color)"),
                    $("#" + g).css("background-color", "var(--tertiary-color)"),
                    p(g)
                }
                ));
                var g = "font-1";
                function h(e) {
                    switch (e) {
                    case "font-1":
                        return "Just Another Hand";
                    case "font-2":
                        return "Cedarville Cursive";
                    case "font-3":
                        return "Patrick Hand SC"
                    }
                }
                $("#switch-signature-type").click((function() {
                    u = !u,
                    t.removeChildren(),
                    u ? (p(g),
                    o.addTo(t),
                    $(".typing-signature").show(),
                    $("#switch-signature-type i").removeClass("fa-font"),
                    $("#switch-signature-type i").addClass("fa-pencil-alt"),
                    $("#signature-instruction").text("-"),
                    $("#typing-signature-cover").css("width", "100%"),
                    $("#typing-signature-cover").css("height", "100%"),
                    $("#font-1").click()) : ($(".typing-signature").hide(),
                    $("#switch-signature-type i").removeClass("fa-pencil-alt"),
                    $("#switch-signature-type i").addClass("fa-font"),
                    $("#signature-instruction").text("Draw slowly to create your signature"),
                    $("#typing-signature-cover").css("width", 0),
                    $("#typing-signature-cover").css("height", 0))
                }
                ));
                var f = "";
                $("#signature-input").on("input", (function() {
                    f = $("#signature-input").val(),
                    $(".font-selection").text(f),
                    o.content = f,
                    o.addTo(t)
                }
                ))
            }
            )),
            $("#canvas-container").on("mouseout", (function(e) {
                var t = {
                    x: -1e3,
                    y: -1e3,
                    color: c.canvasState.activeColorRgb,
                    userFullname: c.userState.myFullName
                };
                c.userState.showWhiteboardControls && re(t),
                vt(c.userState.uid),
                setTimeout((function() {
                    c.userState.showWhiteboardControls && re(t),
                    vt(c.userState.uid)
                }
                ), 100)
            }
            )),
            $("#add-page").click((function() {
                if(window.confirm("Are you sure you want to add a page?"))r().project.layers.length < 100 && i.globalSocketObj.emit("file:add-page", c.userState.uid, c.canvasState.isAsync)
            }
            )),
            $("#select-page").bind("change", (function() {
                p.pageInteractions.changePage($(this).val(), !1, !1),
                !1 === c.canvasState.isAsync && i.globalSocketObj.emit("file:page-change", +$(this).val())
            }
            )),
            r().project.view.setCenter(0, 0),
            $(window).resize((function(e) {
                ve(!1, !1, !0)
            }
            ))
        }
        )),
        i.globalSocketObj.on("resubscribe", (function() {
            s.Z.resubscribe()
        }
        )),
        i.globalSocketObj.on("await:conversion", (function() {
            i.globalSocketObj.emit("await:conversion", {
                room: c.staticGlobals.room,
                convertDoc: c.staticGlobals.convertDoc,
                uid: c.userState.uid,
                readOnly: !1
            })
        }
        )),
        i.globalSocketObj.on("canvas:request:view-sizing", (function() {
            if (c.userState.userIsPresenter) {
                var e = r().project.view
                  , t = $("#canvas-container").innerWidth() / $("#canvas-container").innerHeight();
                i.globalSocketObj.emit("canvas:send:view-sizing", !0, t, T, e.center, e.zoom / N)
            }
        }
        )),
        i.globalSocketObj.on("canvas:send:view-sizing", (function(e, t, o, a, r) {
            ye() || (me(!1, !1),
            me(!1, !1),
            t && o && Re(t, o),
            e && (ye() || h.handlePresenterGesture(a, r, N)))
        }
        ));
        var D, M = {};
        $(".clear-canvas").click((function() {
            g.populateClearCanvasConfirmationText(),
            g.showConfirmationPopup()
        }
        )),
        $("#undo").click((function() {
            i.globalSocketObj.emit("canvas:undo", Ve(), c.staticGlobals.room, r().project.activeLayer.getName())
        }
        )),
        localStorage.setItem("strokeWidth", "medium"),
        $(".stroke-width").change((function(e) {
            localStorage.setItem("strokeWidth", e.target.value),
            $(".stroke-width").each((function() {
                $(".stroke-width option[value=" + e.target.value + "]").attr("selected", "selected")
            }
            ))
        }
        )),
        localStorage.setItem("fontSize", 12),
        $(".font-size").change((function(e) {
            localStorage.setItem("fontSize", +e.target.value);
            var t = +e.target.value
              , o = r().project.selectedItems;
            if (o)
                for (var a = 0; a < o.length; a++) {
                    var n = o[a];
                    n.fontSize = t,
                    i.globalSocketObj.emit("item:font:change", Ve(), n.name, t),
                    _.draw()
                }
            $(".font-size").each((function() {
                $(".font-size option[value=" + t + "]").attr("selected", "selected")
            }
            ))
        }
        ));
        var B, W, F = !1, z = "cursor", G = !1, V = !1, J = !1, H = !1, Z = null, Y = null, K = null, X = null, q = null, Q = null, ee = null, te = [];
        var oe = !1;
        $("#the-canvas").bind("contextmenu", (function(e) {
            e.preventDefault()
        }
        ), !1),
        $("#zoom-percentage-holder").bind("wheel", (function(e) {
            if (!0 !== c.canvasState.readonlyView) {
                e.preventDefault(),
                he(),
                Pe && clearTimeout(Pe),
                !xe && showGridLines && (Te(40, 25, Le),
                xe = !0),
                Pe = setTimeout((function() {
                    $("#zoom-percentage-holder").fadeOut(),
                    Ie()
                }
                ), 500);
                var t, o = e.originalEvent.deltaY;
                c.staticGlobals.isChrome ? (t = .02,
                Math.abs(o) >= 40 && (t = .003)) : (t = .1,
                Math.abs(o) >= 40 && (t = .05));
                var a = r().project.view
                  , n = a.zoom - o * t;
                if (n = Ue(n)) {
                    if ("maxed" == n)
                        return ze(),
                        void _e(!0);
                    a.center = undefined,
                    _e(!0),
                    c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", a.center, a.zoom / N)
                } else
                    _e(!0)
            }
        }
        ));
        var ae = function() {
            return Boolean(r().project.activeLayer.name)
        };
        function re(e) {
            ae() && i.globalSocketObj.emit("cursor:move", Ve(), e)
        }
        var ne = 0;
        var ie = null
          , se = null
          , ce = !1;
        document.addEventListener("keydown", (function(e) {
            //! If Ctrl Z is pressed
            (e.ctrlKey && "z" === e.key || e.cmd && "z" === e.key) && i.globalSocketObj.emit("canvas:undo", Ve(), c.staticGlobals.room, r().project.activeLayer.getName())
        }
        ));
        Math.random().toString(36).substr(2, 10);
        function le(e) {
            e.preventDefault();
            var t = (e.originalEvent || e).clipboardData.getData("text/plain");
            window.document.execCommand("insertText", !1, t)
        }
        function de(e) {
            (!e.shiftKey && 13 == e.keyCode || 27 == e.keyCode || 46 == e.keyCode) && (e.preventDefault(),
            e.stopPropagation())
        }
        function ue(e) {
            if (!e.shiftKey && 13 == e.keyCode || 27 == e.keyCode || 46 == e.keyCode)
                return e.preventDefault(),
                e.stopPropagation(),
                he(),
                !1;
            var t = $("#text-editor")
              , o = t.data("current-point-text-name");
            if (o) {
                var a = "";
                tmpDiv.innerHTML = t[0].innerHTML.replace(/<div>/gi, "<div>\n"), a = replaceMathML(tmpDiv.innerText);
                r().project.activeLayer.children[o] && (r().project.activeLayer.children[o].content = a,
                r().project.activeLayer.children[o].fillColor = c.canvasState.activeColorRgb),
                _.draw(),
                i.globalSocketObj.emit("text:update", Ve(), o, a)
            }
        }
        function pe(e) {
            if ("text" == z && !e.event.ctrlKey && 2 != e.event.button && e.target) {
                var t = e.target.getName();
                if (t.indexOf("text:") > -1) {
                    var o = $("#text-editor");
                    o.data("current-point-text-name") && (e.preventDefault(),
                    e.stopPropagation(),
                    he());
                    var a = (Math.abs(r().project.view.getBounds().x) - Math.abs(e.target.getBounds().x)) * r().project.view.getZoom();
                    e.target.getBounds().x >= 0 && (a = r().project.view.getBounds().x >= 0 ? (Math.abs(e.target.getBounds().x) - r().project.view.getBounds().x) * r().project.view.getZoom() : (Math.abs(e.target.getBounds().x) + Math.abs(r().project.view.getBounds().x)) * r().project.view.getZoom());
                    var n = (Math.abs(r().project.view.getBounds().y) - Math.abs(e.target.getBounds().y)) * r().project.view.getZoom();
                    e.target.getBounds().y >= 0 && (n = r().project.view.getBounds().y >= 0 ? (Math.abs(e.target.getBounds().y) - r().project.view.getBounds().y) * r().project.view.getZoom() : (Math.abs(e.target.getBounds().y) + Math.abs(r().project.view.getBounds().y)) * r().project.view.getZoom()),
                    o.off("blur.updateCanvas"),
                    o.off("keypress.updateText"),
                    o.off("keyup.updateText"),
                    o.css({
                        color: c.canvasState.activeColorRgb,
                        top: n,
                        left: a,
                        paddingLeft: "1px",
                        fontSize: +e.target.fontSize * r().project.view.getZoom()
                    }),
                    e.target.visible = !1,
                    e.target.selected = !0,
                    e.target.selectedColor = c.canvasState.activeColorRgb,
                    r().view.draw(),
                    o.data("current-point-text-name", t),
                    o.show().focus().on("blur.updateCanvas", he).on("keydown.updateText", de).on("keyup.updateText", ue);
                    if(window.firstTime)
                    {
                    	o.on("paste",le);
                    	window.firstTime = false;
                    }
                    o.html(e.target.content);
                    var s = {
                        page: r().project.activeLayer.getName(),
                        name: t,
                        content: e.target.content,
                        color: c.canvasState.activeColorRgb
                    };
                    i.globalSocketObj.emit("text:update:start", Ve(), JSON.stringify(s))
                }
            }
        }
        function ge(e) {
            if (e) {
                if (2 === e.event.button)
                    return;
                if (e.target && e.target.data && e.target.data.forUserId) {
                    if ("signature" == z && c.userState.showWhiteboardControls) {
                        if (e.target.data.forUserId == c.userState.uid && !c.userState.userIsModerator)
                            return;
                        if (e.target.data.hasBeenSigned)
                            return;
                        $("#selected-whiteboard-user").val(e.target.data.forUserId),
                        $("#delete-signature-field").show(),
                        $("#assign-signature-user-dialog").data("remove-target-object", !1),
                        $("#assign-signature-user-dialog").data("target-object", e.target.name),
                        $("#assign-signature-user-dialog").modal("show")
                    }
                    "cursor" == z && e.target.data.forUserId == c.userState.uid && ($("#user-signature-dialog").data("signatureTarget", e.target.name),
                    c.canvasState.setActiveSigning(!0),
                    $("#user-signature-dialog").modal("show"))
                }
            } else
                $("#delete-signature-field").hide(),
                $("#assign-signature-user-dialog").data("remove-target-object", !0),
                $("#assign-signature-user-dialog").data("target-object", "signature:" + M.name),
                $("#assign-signature-user-dialog").modal("show")
        }
        function he() {
            if ("text" == z) {
                var e = $("#text-editor");
                e.hide().off("blur.updateCanvas").off("keypress.updateText").off("keyup.updateText");
                var t = e.data("current-point-text-name");
                if (void 0 !== t && null != t) {
                    e.data("current-point-text-name", null);
                    var o = r().project.activeLayer.children[t]
                      , a = "";
                    tmpDiv.innerHTML = e[0].innerHTML.replace(/<div>/gi, "<div>\n");
                    0 == (a = replaceMathML(computeText(tmpDiv.innerText))).trim().length ? void 0 !== r().project.activeLayer.children[t] ? (r().project.activeLayer.children[t].remove(),
                    V ? i.globalSocketObj.emit("text:remove", Ve(), t) : i.globalSocketObj.emit("item:remove", Ve(), t)) : console.log("could not remove text!!") : o && (o.content = a,
                    o.visible = !0,
                    o.selected = !1,
                    i.globalSocketObj.emit("text:update:end", Ve(), t, a)),
                    V = !1,
                    r().view.draw()
                }
            }
        }
        function fe() {
            var e = r().project.view.bounds;
            I = {
                x: e.x * c.staticGlobals.xScale + e.x,
                y: e.y * c.staticGlobals.yScale + e.y,
                width: e.width,
                height: e.height,
                maxX: 2.5 * (e.x + e.width) + (e.x + e.width),
                maxY: .65 * (e.y + e.height) + (e.y + e.height),
                topLeft: {
                    x: e.topLeft.x,
                    y: e.topLeft.y
                },
                bottomRight: {
                    x: e.bottomRight.x,
                    y: e.bottomRight.y
                }
            }
        }
        function me(e, t) {
            if (t) {
                o = r().project.view.center;
                $("#canvas-scroller").css("overflow-x", "hidden"),
                $("#canvas-scroller").css("overflow-y", "hidden");
                i = (n = $(window).innerHeight() - Ne() - (0,
                y.O$)() || 0) * c.canvasState.aspectRatio;
                $("#draw-container").innerWidth(),
                be();
                o = r().project.view.center;
                $("#canvas-scroller").css("overflow-x", "hidden"),
                $("#canvas-scroller").css("overflow-y", "hidden");
                i = (n = $(window).innerHeight() - Ne() - (0,
                y.O$)() || 0) * c.canvasState.aspectRatio;
                $(window).innerWidth() < i && (n = (i = $(window).innerWidth()) / c.canvasState.aspectRatio),
                $("#canvas-container").width(i),
                $("#canvas-container").height(n),
                $("#the-canvas").width(s),
                $("#the-canvas").height(n),
                $("#canvas-scroller").height(n),
                $("#canvas-scroller").width($(window).outerWidth()),
                r().project.view.setViewSize($("#canvas-container").width(), $("#canvas-container").height()),
                r().project.view.setCenter($("#the-canvas").width() / 2, $("#the-canvas").height() / 2),
                r().project.view.scrollBy(o.subtract(r().project.view.center)),
                r().project.view.setZoom(Math.min(n, i) / c.staticGlobals.ZoomConstant),
                x = r().project.view.zoom,
                L = .6 * x,
                N = 2.5 * (R = 2 * (E = 2 * x)),
                T = r().project.view.center;
                l = r().project.view.bounds;
                fe(),
                Ze()
            } else {
                var o = r().project.view.center;
                $("#canvas-scroller").css("overflow-x", "hidden"),
                $("#canvas-scroller").css("overflow-y", "hidden");
                var n, i = (n = $(window).innerHeight() - Ne() - (0,
                y.O$)() || 0) * c.canvasState.aspectRatio, s = $("#draw-container").innerWidth() - be();
                $(window).innerWidth() < i && (n = (i = $(window).innerWidth()) / c.canvasState.aspectRatio),
                $("#canvas-container").width(i),
                $("#canvas-container").height(n),
                $("#canvas-scroller").height(n),
                $("#canvas-scroller").width($(window).outerWidth()),
                r().project.view.setViewSize($("#canvas-container").width(), $("#canvas-container").height()),
                r().project.view.setCenter($("#the-canvas").width() / 2, $("#the-canvas").height() / 2),
                r().project.view.scrollBy(o.subtract(r().project.view.center)),
                r().project.view.setZoom(Math.min(n, i) / c.staticGlobals.ZoomConstant),
                x = r().project.view.zoom,
                L = .6 * x,
                N = 2.5 * (R = 2 * (E = 2 * x)),
                T = r().project.view.center;
                var l = r().project.view.bounds;
                fe(),
                Ze(),
                e || (I.exportSize = {
                    topLeft: new a.Point(l.x,l.y),
                    bottomRight: new a.Point(l.bottomRight.x,l.bottomRight.y)
                },
                Ye(l)),
                $("#draw-container").innerWidth(),
                be();
                var o = r().project.view.center;
                $("#canvas-scroller").css("overflow-x", "hidden"),
                $("#canvas-scroller").css("overflow-y", "hidden"),
                $("#canvas-container").width(s),
                $("#canvas-container").height(n),
                $("#the-canvas").width(s),
                $("#the-canvas").height(n),
                $("#canvas-scroller").height(n),
                $("#canvas-scroller").width($(window).outerWidth()),
                r().project.view.setViewSize($("#canvas-container").width(), $("#canvas-container").height()),
                r().project.view.setCenter($("#the-canvas").width() / 2, $("#the-canvas").height() / 2),
                r().project.view.scrollBy(o.subtract(r().project.view.center)),
                r().project.view.setZoom(Math.min(n, s) / c.staticGlobals.ZoomConstant)
            }
        }
        function ve(e, t, o) {
            if (!ye() && !Ke)
                return i.globalSocketObj.emit("canvas:request:view-sizing");
            if (Fe(),
            T = r().project.view.center,
            o || (me(e, t),
            T = r().project.view.center),
            r().project.view.draw(),
            c.canvasState.setToolsDropDownOpen(!1),
            $("#overflow-toolbar").hide(),
            $(".button-tool").blur(),
            $("#more").css({
                color: "black"
            }),
            c.userState.userIsPresenter) {
                var a = $("#canvas-container").innerWidth() / $("#canvas-container").innerHeight();
                i.globalSocketObj.emit("canvas:send:view-sizing", !1, a, r().project.view.center, T, r().project.view.zoom / L)
            }
        }
        function be() {
            var e = document.createElement("p");
            e.style.width = "100%",
            e.style.height = "200px";
            var t = document.createElement("div");
            t.style.position = "absolute",
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.visibility = "hidden",
            t.style.width = "200px",
            t.style.height = "150px",
            t.style.overflow = "hidden",
            t.appendChild(e),
            document.body.appendChild(t);
            var o = e.offsetWidth;
            t.style.overflow = "scroll";
            var a = e.offsetWidth;
            return o == a && (a = t.clientWidth),
            document.body.removeChild(t),
            o - a
        }
        function ye() {
            return !(c.canvasState.activePresentation && !c.userState.userIsPresenter)
        }
        function we(e, t) {
            var o = !1;
            return function() {
                o || (e.apply(null, arguments),
                o = !0,
                setTimeout((function() {
                    o = !1
                }
                ), t))
            }
        }
        function Se(e) {
            !0 !== c.canvasState.readonlyView && ye() && 1 != ke.active && (e.ctrlKey ? (he(),
            Ee(e.originalEvent.deltaY || -e.originalEvent.scale, [e.originalEvent.offsetX || e.originalEvent.layerX, e.originalEvent.offsetY || e.originalEvent.layerY], !1, !0)) : Math.abs(e.originalEvent.deltaY) >= 40 || !c.staticGlobals.isChrome && Math.abs(e.originalEvent.deltaY) > 2.5 ? e.shiftKey ? (he(),
            Be(e.originalEvent.deltaY, "x")) : (he(),
            Be(e.originalEvent.deltaY, "y")) : Me(e.originalEvent.deltaX, e.originalEvent.deltaY))
        }
        //! Touchscreen tools handling ------------------------
        function je(e) {
            e.preventDefault()
        }
        I = {},
        $(".prevent-zoom").bind("wheel", (function(e) {
            e.preventDefault()
        }
        )),
        $("#the-canvas").bind("wheel", we(Se, 70)),
        $("#the-canvas").bind("touchmove", we((function(e) {
            if (!ye())
                return;
            var t = e.originalEvent.touches;
            if (2 === t.length)
                if ($e.fingerOne && $e.fingerTwo) {
                    var o = $e.fingerOne.clientX
                      , a = $e.fingerOne.clientY
                      , r = $e.fingerTwo.clientX
                      , n = $e.fingerTwo.clientY
                      , i = Math.sqrt(Math.pow(o - r, 2) + Math.pow(a - n, 2))
                      , s = t[0].clientX
                      , c = t[0].clientY
                      , l = t[1].clientX
                      , d = t[1].clientY
                      , u = Math.sqrt(Math.pow(s - l, 2) + Math.pow(c - d, 2));
                    if ($e.type || (Math.abs(u - i) > 15 ? $e.type = "zoom" : $e.type = "pan"),
                    "zoom" === $e.type) {
                        he();
                        var p = 1;
                        u > i && (p = -1),
                        Ee(p, [(s + l) / 2, (c + d) / 2], !1, !0, !0)
                    } else
                        Me((s + l) / 2, (c + d) / 2);
                    $e.fingerOne = t[0],
                    $e.fingerTwo = t[1],
                    $e.newChanges = !1
                } else {
                    $e.fingerOne = t[0],
                    $e.fingerTwo = t[1];
                    s = t[0].clientX,
                    c = t[0].clientY,
                    l = t[1].clientX,
                    d = t[1].clientY;
                    $e.newChanges = !0,
                    $e.type = ""
                }
        }
        ), 27.5)),
        $("#the-canvas").bind("gesturestart", (function(e) {
            e.preventDefault()
        }
        )),
        $("#the-canvas").bind("gesturechange", we((function(e) {
            e.preventDefault(),
            c.staticGlobals.isSafari && (e.ctrlKey = !0,
            Se(e))
        }
        ), 150)),
        $("#the-canvas").bind("gestureend", je),
        c.staticGlobals.isSafari && $("#the-canvas").bind("touchmove", je);
        var $e = {
            fingerOne: null,
            fingerTwo: null,
            newChanges: !1,
            type: ""
        }
          , ke = {
            active: !1,
            cleared: !0
        };
        $("#the-canvas").bind("touchstart", (function(e) {
            z && "cursor" === z && (ke.active = !0)
        }
        )),
        $("#the-canvas").bind("touchend", (function() {
            $e.fingerTwo ? $e.fingerTwo = null : $e.fingerOne && ($e.fingerOne = null),
            $e.fingerOne || $e.fingerTwo ? (ke.active = !0,
            ke.cleared = !1) : (ke.active = !1,
            ke.cleared = !0)
        }
        ));
        //! ------------------------------------
        var Oe, Ce, Pe, Ae, Le = {
            width: 1723,
            height: 1177,
            left: -861,
            top: -588,
            bottom: 588,
            right: 861
        }, xe = !1, Te = function(e, t, o) {
            for (var r = o.width / e, n = o.height / t, i = [], s = [], c = 0; c <= e; c++) {
                var l = o.left + c * r
                  , d = new a.Point(l,o.top)
                  , u = new a.Point(l,o.bottom);
                i.push(a.Path.Line({
                    from: d,
                    to: u,
                    strokeColor: "black",
                    name: "grid-line",
                    opacity: .09
                }))
            }
            for (c = 0; c <= t; c++) {
                var p = o.top + c * n
                  , g = new a.Point(o.left,p)
                  , h = new a.Point(o.right,p);
                s.push(a.Path.Line({
                    from: g,
                    to: h,
                    strokeColor: "black",
                    name: "grid-line",
                    opacity: .09
                }))
            }
            Oe = new a.Group(i),
            Ce = new a.Group(s)
        };
        function Ie(e) {
            Oe && Ce && (Oe.remove(),
            Ce.remove()),
            xe = !1
        }
        function _e(e) {
            e && ($("#zoom-percentage-holder").fadeIn(),
            r().project.view.zoom == N ? $("#zoom-percentage-textbox").text("100%") : $("#zoom-percentage-textbox").text(parseInt((r().project.view.zoom - L) / N * 100) + "%"))
        }
        function Ee(e, t, o, a, n) {
            var s;
            Pe && clearTimeout(Pe),
            !xe && a && (Te(40, 25, Le),
            xe = !0),
            Pe = setTimeout((function() {
                $("#zoom-percentage-holder").fadeOut(),
                Ie()
            }
            ), 500),
            t && (t = new (r().Point)(t[0],t[1])),
            n ? (s = .15,
            (r().project.view.zoom - L) / N * 100 > 30 && (s = .25)) : c.staticGlobals.isChrome ? (s = .004,
            Math.abs(e) <= 40 && (s = .06)) : s = .2;
            var l = r().project.view.zoom;
            if (o) {
                d = r().project.view;
                "zoom-out" == o ? l <= x ? (d.center = T,
                d.zoom = L) : l <= E ? (d.center = T,
                d.zoom = x) : l <= R ? (d.center = T,
                d.zoom = E) : l <= N && (d.center = T,
                d.zoom = R) : l >= R ? (d.center = T,
                d.zoom = N) : l >= E ? (d.center = T,
                d.zoom = R) : l >= x ? (d.center = T,
                d.zoom = E) : l >= L && (d.center = T,
                d.zoom = x),
                c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", d.center, d.zoom / N)
            } else {
                if (!e)
                    return void _e(a);
                var d, u = (d = r().project.view).zoom, p = d.center, g = d.viewToProject(t), h = d.zoom - e * s;
                if (!(h = Ue(h)))
                    return void _e(a);
                if ("maxed" == h)
                    return ze(),
                    _e(a),
                    void (c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", d.center, d.zoom / N));
                var f, m = u / h;
                f = g.subtract(p);
                var v = g.subtract(f.multiply(m)).subtract(p);
                d.center = e ? d.center.add(v) : f,
                c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", d.center, d.zoom / N)
            }
            _e(a)
        }
        function Re(e, t) {
            var o, n, i, s;
            e > 1 ? (n = (o = $("#canvas-scroller").innerWidth()) / e) > $("#canvas-scroller").innerHeight() && (o = e * (n = $("#canvas-scroller").innerHeight())) : (o = e * (n = $("#canvas-scroller").innerHeight())) > $("#canvas-scroller").innerWidth() && (n = (o = $("#canvas-container").innerWidth()) / e),
            $("#canvas-container").width(o),
            $("#canvas-container").height(n),
            s = $("#canvas-container").innerHeight(),
            (i = c.canvasState.aspectRatio * s) > $("#canvas-scroller").innerWidth() && (s = (i = $("#canvas-container").innerWidth()) / c.canvasState.aspectRatio),
            T = new a.Point(t[1],t[2]),
            $("#the-canvas").height(n),
            $("#the-canvas").width(o),
            fe(),
            r().project.view.setViewSize(o, s),
            r().project.view.setCenter(T),
            r().project.view.setZoom(Math.min(s, i) / c.staticGlobals.ZoomConstant),
            x = r().project.view.zoom,
            L = .6 * x,
            N = 2.5 * (R = 2 * (E = 2 * x))
        }
        function Ne() {
            return $("#editbar").is(":visible") ? $("#editbar").innerHeight() || 0 : $("#read-only-toolbar").innerHeight() || 0
        }
        function Ue(e) {
            return (e = Math.min(e, N)) < L ? "maxed" : (e = Math.max(e, L)) != r().project.view.zoom ? (r().project.view.zoom = e,
            e) : null
        }
        function De(e) {
            Pe && clearTimeout(Pe),
            xe || (Te(40, 25, Le),
            xe = !0),
            Pe = setTimeout((function() {
                $("#zoom-percentage-holder").fadeOut(),
                Ie()
            }
            ), 500);
            var t = r().project.view.center
              , o = [];
            if (o[0] = e[0][0] - e[1][0],
            o[1] = e[0][1] - e[1][1],
            r().project.view.bounds.left + o[0] > I.x && r().project.view.bounds.right + o[0] < I.maxX && r().project.view.bounds.top + o[1] > I.y && r().project.view.bounds.bottom + o[1] < I.maxY) {
                var a = new (r().Point)(o)
                  , n = t.add(a);
                r().project.view.center = n
            }
            c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", _.center, null)
        }
        function Me(e, t) {
            Pe && clearTimeout(Pe),
            xe || (Te(40, 25, Le),
            xe = !0),
            Pe = setTimeout((function() {
                $("#zoom-percentage-holder").fadeOut(),
                Ie()
            }
            ), 500),
            c.staticGlobals.isChrome ? (e *= .9,
            t *= .9) : (e *= 5.9,
            t *= 5.9);
            var o = r().project.view.center
              , a = new (r().Point)(e,t)
              , n = o.add(a);
            r().project.view.bounds.left + n.x > I.x && r().project.view.bounds.right + n.x < I.maxX && r().project.view.bounds.top + n.y > I.y && r().project.view.bounds.bottom + n.y < I.maxY && (r().project.view.center = n),
            c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", r().project.view.center, null)
        }
        function Be(e, t) {
            if (!0 !== c.canvasState.readonlyView) {
                var o, a;
                Pe && clearTimeout(Pe),
                xe || (Te(40, 25, Le),
                xe = !0),
                Pe = setTimeout((function() {
                    $("#zoom-percentage-holder").fadeOut(),
                    Ie()
                }
                ), 500);
                var n = r().project.view
                  , s = [];
                if ("y" == t) {
                    if (n.zoom <= x ? o = e * Ae[0] : n.zoom <= E ? o = e * Ae[1] : n.zoom <= R ? o = e * Ae[2] : n.zoom <= N && (o = e * Ae[3]),
                    s[0] = r().project.view.center.x,
                    s[1] = r().project.view.center.y + o,
                    r().project.view.bounds.top + s[1] > I.y && r().project.view.bounds.bottom + s[1] < I.maxY) {
                        var l = new (r().Point)(s);
                        r().project.view.center = l
                    }
                } else if (n.zoom <= x ? a = e * Ae[0] : n.zoom <= E ? a = e * Ae[1] : n.zoom <= R ? a = e * Ae[2] : n.zoom <= N && (a = e * Ae[3]),
                s[0] = r().project.view.center.x + +a,
                s[1] = r().project.view.center.y,
                r().project.view.bounds.left + s[0] > I.x && r().project.view.bounds.right + s[0] < I.maxX) {
                    l = new (r().Point)(s);
                    r().project.view.center = l
                }
                c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", r().project.view.center, null)
            }
        }
        function We(e) {
            if (r().project.activeLayer)
                for (var t = 0; t < r().project.activeLayer.children.length; t++)
                    if (r().project.activeLayer.children[t].name) {
                        if (r().project.activeLayer.children[t].name.indexOf("pdf-page") > -1)
                            return r().project.activeLayer.children[t].loaded ? Fe() : setTimeout((function() {
                                We(e)
                            }
                            ), 1e3);
                        e && d.vs()
                    }
        }
        function Fe() {
            if (r().project.activeLayer) {
                var e = (0,
                k.getFirstChildOfCurrentPage)();
                if ((0,
                k.centerIsPrevented)((0,
                k.getFirstChildOfCurrentPage)(), (0,
                k.isCurrentWhiteboardPagePDF)(e), (0,
                k.isCurrentPagePDFLoaded)(e)))
                    return;
                r().project.view.center = T,
                me(!1, !1),
                Ee(null, null, "zoom-out", !1, !0),
                Ee(null, null, "zoom-in", !1, !0),
                c.userState.userIsPresenter && i.globalSocketObj.emit("canvas:gesture", r().project.view.center, null)
            }
        }
        function ze() {
            r().project.view.center = T,
            r().project.view.zoom = L
        }
        function Ge(e) {
            var t = "." + localStorage.selectedTool + "-tool";
            $(t).css({
                color: "black",
                "background-color": "#f1f3f6"
            }),
            $(e).css({
                color: "var(--primary-color)",
                "background-color": "var(--tertiary-color)"
            })
        }
        function Ve() {
            if (r().project.activeLayer.name)
                return parseInt(r().project.activeLayer.name.split("-")[1]);
            console.error("PageNum did not exist on load")
        }
        function Je() {
            r().project.activeLayer.selected = !1;
            for (var e = 0; e < r().project.layers.length; e++)
                r().project.layers[e].selected = !1;
            _.draw()
        }
        function He(e) {
            for (var t = 0; t < r().project.layers.length; t++)
                if (r().project.layers[t].getName() == e)
                    for (var o = 0; o < r().project.layers[t].children.length; o++)
                        r().project.layers[t].children[o].name && -1 == r().project.layers[t].children[o].name.indexOf("pdf-page") && (r().project.layers[t].children[o].remove(),
                        o--);
            _.draw(),
            ve(!1, !1, !0)
        }
        function Ze() {
            r().project.activeLayer.children["border-box"] && r().project.activeLayer.children["border-box"].remove()
        }
        function Ye(e) {
            new a.Path.Rectangle({
                name: "border-box",
                topLeft: new a.Point(e.topLeft.x,e.topLeft.y),
                bottomRight: new a.Point(e.bottomRight.x,e.bottomRight.y),
                strokeColor: "black",
                strokeWidth: 1,
                opacity: 1,
                dashArray: [10, 12]
            })
        }
        i.globalSocketObj.on("canvas:gesture", (function(e, t) {
            l.readonlyManager.resetLastUpdatedAt(),
            ye() || h.handlePresenterGesture(e, t, N)
        }
        )),
        Ae = c.staticGlobals.isChrome ? [.2, .2, .25, .3] : [10, 11, 12, 13],
        $("body").bind("dragover dragenter", (function(e) {
            e.preventDefault()
        }
        )),
        $("body").bind("drop", (function(e) {
            (e = e || window.event).preventDefault && e.preventDefault();
            for (var t = (e = e.originalEvent).dataTransfer.files, o = 0; o < t.length; o++) {
                at(t[o])
            }
        }
        )),
        $(".center-view").click(Fe),
        $(".toggle-zoom-in").click((function() {
            Ee(null, null, "zoom-in")
        }
        )),
        $(".toggle-zoom-out").click((function() {
            Ee(null, null, "zoom-out")
        }
        )),
        $(".full-screen").click((function() {
            window.parent && window.parent.postMessage({
                action: "toggle-fullscreen-whiteboard"
            }, "*")
        }
        )),
        $(".export-pdf").on("click", (function() {
            Xe()
        }
        )),
        $("#math-editor").on("click", (function() {}
        )),
        $(".async").on("click", (function() {
            c.canvasState.toggleAsync(Ve())
        }
        )),
        $("#confirmation-button-okay").on("click", (function() {
            var e = g.handleOkayPress();
            switch (e.type) {
            case "async":
                null !== e.asyncPageNum && void 0 !== e.asyncPageNum && (p.pageInteractions.changePage(e.asyncPageNum, !1, !1, !1, !1),
                f.updateSelectPageUi(e.asyncPageNum));
                break;
            case "clear":
                He(r().project.activeLayer.getName()),
                i.globalSocketObj.emit("canvas:clear", Ve(), r().project.activeLayer.getName());
                break;
            case "pass-presenter":
                var t = $(window).innerHeight() - $("#editbar").outerHeight() || 0 - $("#read-only-toolbar").outerHeight() || 0 - (0,
                y.O$)() || -2;
                $("#canvas-container").innerWidth();
                i.globalSocketObj.emit("user:presenter-handoff", !0, {
                    userFullname: e.userFullname,
                    userId: e.userId
                }, e.userId),
                c.userState.setUserIsPresenter(!1),
                h.handlePresenterChange(!0, e.userFullname, !1)
            }
        }
        )),
        $("#confirmation-button-cancel").on("click", g.handleCancelPress),
        $(".cursor-tool").on("click", (function() {
            Ge(".cursor-tool"),
            localStorage.setItem("selectedTool", "cursor"),
            Je(),
            z = "cursor",
            $("#the-canvas").css("cursor", "pointer"),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".highlighter-tool").on("click", (function() {
            Ge(".highlighter-tool"),
            localStorage.setItem("selectedTool", "highlighter"),
            Je(),
            z = "draw",
            $("#the-canvas").css({
                cursor: "crosshair"
            }),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".eraser-tool").on("click", (function() {
            Ge(".eraser-tool"),
            localStorage.setItem("selectedTool", "eraser"),
            Je(),
            z = "eraser",
            $("#the-canvas").css({
                cursor: "crosshair"
            }),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".pencil-tool").on("click", (function() {
            Ge(".pencil-tool"),
            localStorage.setItem("selectedTool", "pencil"),
            Je(),
            z = "pencil",
            $("#the-canvas").css({
                cursor: "crosshair"
            }),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".ellipse-tool").on("click", (function() {
            Ge(".ellipse-tool"),
            localStorage.setItem("selectedTool", "ellipse"),
            Je(),
            z = "ellipse",
            $("#the-canvas").css("cursor", "crosshair"),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".rectangle-tool").on("click", (function() {
            Ge(".rectangle-tool"),
            localStorage.setItem("selectedTool", "rectangle"),
            Je(),
            z = "rectangle",
            $("#the-canvas").css("cursor", "crosshair"),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".arrow-tool").on("click", (function() {
            Ge(".arrow-tool"),
            localStorage.setItem("selectedTool", "arrow"),
            Je(),
            z = "line",
            $("#the-canvas").css("cursor", "crosshair"),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".text-tool").on("click", (function() {
            Ge(".text-tool"),
            localStorage.setItem("selectedTool", "text"),
            Je(),
            z = "text",
            $("#the-canvas").css({
                cursor: "text"
            }),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".checkmark-tool").on("click", (function() {
            Ge(".checkmark-tool"),
            localStorage.setItem("selectedTool", "checkmark"),
            Je(),
            z = "checkmark",
            $("#the-canvas").css({
                cursor: "crosshair"
            }),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".signature-tool").on("click", (function() {
            var dt = new Date();
            window.createTBox(window.mod.inl + " " + (dt.getMonth()+1)+"/"+dt.getDate()+"/"+(dt.getYear()%100), window.mod.col,12,0,-240);
            Je(),
            z = "signature",
            $("#the-canvas").css("cursor", "crosshair"),
            r().project.activeLayer.selected = !1
        }
        )),
        $(".select-tool").on("click", (function() {
            Ge(".select-tool"),
            localStorage.setItem("selectedTool", "select"),
            z = "select",
            $("#the-canvas").css({
                cursor: "crosshair"
            })
        }
        )),
        localStorage.selectedTool && !1 === c.canvasState.readonlyView && ("highlighter" === localStorage.selectedTool ? $(".highlighter-tool").click() : "pencil" === localStorage.selectedTool ? $(".pencil-tool").click() : "eraser" === localStorage.selectedTool ? $(".eraser-tool").click() : "ellipse" === localStorage.selectedTool ? $(".ellipse-tool").click() : "rectangle" === localStorage.selectedTool ? $(".rectangle-tool").click() : "arrow" === localStorage.selectedTool ? $(".arrow-tool").click() : "text" === localStorage.selectedTool ? $(".text-tool").click() : "checkmark" === localStorage.selectedTool ? $(".checkmark-tool").click() : "signature" === localStorage.selectedTool ? $(".signature-tool").click() : "cursor" === localStorage.selectedTool ? $(".cursor-tool").click() : "select" === localStorage.selectedTool && $(".select-tool").click()),
        $(".upload-image").on("click", (function() {
            $("#image-input").click()
        }
        )),
        $(".toggle-whiteboard-lock").on("click", (function() {
            if (window.localStorage.setItem("lock-whiteboard-gotit", !0),
            $(this).data("locked"))
                ve(!1, !1, !0),
                $("#tooltip-lock-button-header").hide(),
                $(this).data("locked", !1),
                $(".toggle-whiteboard-lock i").removeClass("fa-lock"),
                $(".toggle-whiteboard-lock i").addClass("fas fa-unlock"),
                $(".toggle-whiteboard-lock").removeClass("whiteboard-locked"),
                $("#tooltip-lock-button-body").text("Lock this whiteboard so others can not edit"),
                c.canvasState.setActivePresentation(!1),
                i.globalSocketObj.emit("user:toggle-whiteboard-controls", {
                    wbIsLocked: !1,
                    userData: null,
                    ratioObject: null,
                    initiatorUid: c.userState.uid
                }),
                h.handlePresenterChange(!1, c.userState.myFullName, !0);
            else {
                ve(!1, !1, !0);
                for (var e = 0; e < r().project.activeLayer.children.length; e++)
                    r().project.activeLayer.children[e].name && r().project.activeLayer.children[e].name.indexOf("cursor") > -1 && r().project.activeLayer.children[e].remove();
                $(this).data("locked", !0),
                $(".toggle-whiteboard-lock").addClass("whiteboard-locked"),
                $(".toggle-whiteboard-lock i").removeClass("fas fa-unlock"),
                $(".toggle-whiteboard-lock i").addClass("fa-lock"),
                $("#tooltip-lock-button-body").text("Unlock this whiteboard so others can edit");
                var t = $(window).innerHeight() - $("#editbar").outerHeight() || 0 - $("#read-only-toolbar").outerHeight() || 0 - (0,
                y.O$)() || -2
                  , o = $("#canvas-container").innerWidth() / t;
                i.globalSocketObj.emit("user:toggle-whiteboard-controls", {
                    wbIsLocked: !0,
                    userData: {
                        userFullname: c.userState.myFullName,
                        userId: c.userState.uid,
                        allowLock: !0,
                        userIsModerator: !0
                    },
                    ratioObject: {
                        aspect: o,
                        center: r().project.view.center,
                        ogCenter: T
                    },
                    initiatorUid: c.userState.uid
                }),
                c.userState.setUserIsPresenter(!0),
                h.handlePresenterChange(!0, c.userState.myFullName, !0)
            }
        }
        )),
        $("#more").on("click", (function() {
            switch (c.canvasState.toolsDropDownOpen) {
            case !0:
                $("#overflow-toolbar").hide(),
                $(".button-tool").blur(),
                $("#more").css({
                    color: "black"
                });
                break;
            case !1:
                $("#overflow-toolbar").show(),
                $("#more").css({
                    color: "var(--primary-color)"
                })
            }
            c.canvasState.setToolsDropDownOpen(!c.canvasState.toolsDropDownOpen)
        }
        )),
        $(".export-image").on("click", (function() {
            Ze(),
            new a.Shape.Rectangle({
                name: "temp-background",
                rectangle: _.bounds,
                fillColor: "#FFF"
            }).sendToBack();
            var e = r().project.activeLayer.clone({
                insert: !1,
                deep: !0
            });
            e.visible = !0;
            var t = new a.Path.Rectangle({
                point: [I.topLeft.x, I.topLeft.y],
                size: [I.width, I.height]
            })
              , o = new a.Group(t,e);
            o.clipped = !0;
            var n = o.rasterize(r().project.view.resolution, !1);
            !function(e, t) {
                var o = document.createElement("a");
                o.href = e,
                o.download = t,
                document.body.appendChild(o),
                o.click()
            }(n.toDataURL(), e.name + "-export"),
            n.remove(),
            e.remove(),
            t.remove(),
            Ye(I)
        }
        ));
        var Ke = !1;
        var Xe = function() {
            Ke = !0,
            ve(!0, !0, !1),
            Ot("Exporting to PDF ... ", 10),
            $("#canvas-container").hide();
            var e = (0,
            b.populateJspdfDoc)()
              , t = r().project.activeLayer.getName();
            t && (t = t.substr(5)),
            (0,
            v.setProjectSvg)(),
            (0,
            v.setPageSvgArray)(),
            qe(e, 0, (function() {
                t && p.pageInteractions.changePage(t, !1, !0),
                j().createPdf(e).download("conexed-whiteboard-export-" + (new Date).toISOString().slice(0, 10) + ".pdf"),
                d.VG(),
                Ke = !1,
                ve(!1, !1, !1),
                $("#canvas-container").show()
            }
            ))
        }
          , qe = function e(t, o, a) {
            setTimeout((function() {
                p.pageInteractions.changePage(o, !0, !0),
                ve(!0, !0, !1),
                (0,
                v.createTempBackgroundForExport)(),
                t.content[o] = (0,
                v.generateJspdfPageJSON)(o, I, c.canvasState.aspectRatio),
                (0,
                v.removeTempWhiteBackground)(),
                o < r().project.layers.length - 1 ? e(t, o + 1, a) : a()
            }
            ), 50),
            $("#progress-bar").css({
                width: (o + 1) / r().project.layers.length * 90 + "%"
            }),
            $("#progress-percent").text(Math.round((o + 1) / r().project.layers.length * 90) + "%")
        };
        $("#image-input").bind("change", (function(e) {
            for (var t = document.getElementById("image-input").files, o = 0; o < t.length; o++) {
                var a = t[o];
                a.type.indexOf("image/") > -1 ? at(a) : r().project.layers.length < 100 && et(a)
            }
        }
        ));
        var Qe = null;
        function et(e) {
            Qe = e,
            console.log("Requesting authorization to upload file '" + e.name + "'..."),
            i.globalSocketObj.emit("file:request-upload", e.name, e.size)
        }
        i.globalSocketObj.on("file:upload-authorized", (function(e) {
            if (ve(!0, !0, !1),
            d.L8(),
            Ot("File Upload in Progress...", 0),
            e.uid === c.userState.uid) {
                console.log("File upload authorized with data:", e.urlMetadata);
                var t = new XMLHttpRequest
                  , o = !1;
                t.upload.addEventListener("progress", (function(e) {
                    if (e.lengthComputable) {
                        var t = Math.round(100 * e.loaded / e.total);
                        i.globalSocketObj.emit("file:upload-progress", t)
                    }
                }
                ), !1),
                t.onreadystatechange = function(e) {
                    4 == t.readyState && (t.status >= 200 && t.status <= 299 ? (console.log("Upload complete."),
                    Ot("Uploading a File...", 100),
                    i.globalSocketObj.emit("file:upload-complete", Qe.name)) : o || (o = !0,
                    console.log("Upload failed due to status code:", t.status),
                    i.globalSocketObj.emit("file:upload-cancel"),
                    alert("Sorry! There was a problem uploading the file to our servers. Please try again!"),
                    d.vs()))
                }
                ,
                t.upload.addEventListener("error", (function(e) {
                    o || (o = !0,
                    console.error("Upload failed:", e),
                    i.globalSocketObj.emit("file:upload-cancel"),
                    alert("Sorry! There was a problem uploading the file to our servers. Please try again!"),
                    d.vs())
                }
                )),
                t.open("POST", e.urlMetadata.url);
                var a = new FormData;
                for (var r in e.urlMetadata.fields)
                    a.append(r, e.urlMetadata.fields[r]);
                a.append("file", Qe),
                t.send(a)
            }
        }
        )),
        i.globalSocketObj.on("file:upload-progress", (function(e) {
            Ot("File Upload in Progress...", e)
        }
        )),
        i.globalSocketObj.on("file:upload-cancelled", (function() {
            d.VG(),
            ve(!1, !1, !1),
            d.vs()
        }
        )),
        //! TESTING PURPOSES
        i.globalSocketObj.on("hostname:info", (function(e) {
            console.log(e)
        }
        )),
        i.globalSocketObj.on("remove:lock", (function() {
            l.readonlyManager.resetLastUpdatedAt(),
            $(".toggle-whiteboard-lock-li").remove()
        }
        )),
        i.globalSocketObj.on("file:data", (function(e) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            e.success) {
                if (Ot("Uploading " + e.originalFilename + " ... ", e.percent),
                c.userState.uid == e.fromUserId) {
                    var t = 524288 * e.place
                      , o = Qe.slice(t, t + Math.min(524288, Qe.size - t));
                    pdfReader.readAsBinaryString(o)
                }
            } else
                alert(e.message),
                r().project.activeLayer = new a.Layer,
                r().project.activeLayer.setName("page-0"),
                Qe = null,
                d.VG()
        }
        )),
        //! Remove me
        i.globalSocketObj.on("file:page-changed", (function(e) {
            e.fromUserId;
            var t = e.pageNum
              , o = e.hasHistory
              , a = e.pageJson
              , s = e.images
              , d = e.ignoreReadme;
            if (!1 === c.canvasState.isAsync) {
                if (l.readonlyManager.resetLastUpdatedAt(),
                he(),
                (0,
                p.shouldOnlyLoadOnePage)(d))
                    return function(e, t, o) {
                        t = n.an(t),
                        t = n.ji({
                            pageNum: e,
                            s3Urls: o,
                            dbUrls: ht,
                            json: t
                        });
                        var a = r().project.layers["page-".concat(e)];
                        if (a)
                            a.importJSON(t);
                        else {
                            var i = (0,
                            p.createNewLayer)(e);
                            i.importJSON(t),
                            r().project.layers["page-".concat(e)] = i
                        }
                        p.pageInteractions.changePage(e, !1, !1)
                    }(t, a, s);
                f.selectCorrectPageInDropdown(t),
                f.alterUndoProp(!o),
                p.pageInteractions.changePage(t, !1, !1),
                p.pageInteractions.changePage(t, !1, !1),
                ye() || (i.globalSocketObj.emit("canvas:request:view-sizing"),
                f.closeToolbarDropdown())
            } else
                c.canvasState.setAsyncPageNum(t)
        }
        )),
        i.globalSocketObj.on("file:page-added", (function(e) {
            var t = e.pageNum
              , o = e.initiatorUid
              , a = e.pageName
              , n = e.aspectRatio
              , s = e.fromAsync;
            l.readonlyManager.resetLastUpdatedAt();
            var d = parseInt(t, 10) + 1;
            $("#tool-select-page").show(),
            $("#select-page").append($("<option>", {
                value: t,
                text: "Page " + d
            })),
            (0,
            p.shouldChangePage)(o, s) && $("#select-page").val(t);
            var u = new (r().Layer)({
                name: a,
                insert: !1,
                data: {
                    aspectRatio: n
                },
                visible: !!(0,
                p.shouldChangePage)(o, s)
            });
            $("#add-page-thumbnail").remove();
            var g = (0,
            y.Dm)()
              , h = $("<canvas class='whiteboard-thumbnail' title='Page " + (g + 1) + "' data-page-name='page-" + g + "' id='img-page-" + g + "'/>").tooltipster();
            h.click((function() {
                if (!$(".whiteboard-thumbnail").attr("disabled")) {
                    $(".whiteboard-thumbnail").removeClass("active"),
                    $(this).addClass("active");
                    var e = $(this).data("page-name").replace("page-", "");
                    $('#select-page option[value="' + e + '"]').prop("selected", !0),
                    p.pageInteractions.changePage(e, !1, !1),
                    !1 === c.canvasState.isAsync && i.globalSocketObj.emit("file:page-change", +e)
                }
            }
            ));
            var f = new Image;
            if (f.crossOrigin = "anonymous",
            f.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
            f.onload = function(e) {
                var t = document.getElementById("img-page-" + g);
                if (t) {
                    t.width = 40;
                    var o = t.getContext("2d");
                    o.fillStyle = "rgb(255,255,255)",
                    o.fillRect(0, 0, 60, 147),
                    o.imageSmoothingQuality = "high",
                    t.style.border = "1px solid rgb(180, 180, 180)",
                    o.drawImage(e.target, 0, 0, 40, 147)
                }
            }
            ,
            !1 === c.canvasState.readonlyView && ((0,
            y.NM)(),
            (0,
            y.oQ)(h),
            c.userState.showWhiteboardControls || c.userState.userIsModerator)) {
                var m = $("<button id='add-page-thumbnail' title='Add Page'><i class='fa fa-plus fa-2x'></i></button>").tooltipster();
                m.click((function() {
                    $("#add-page").click()
                }
                )),
                (0,
                y.oQ)(m)
            }
            r().project.addLayer(u),
            (0,
            p.shouldChangePage)(o, s) && p.pageInteractions.changePage(t, !1, !1),
            !0 === c.canvasState.isAsync && c.canvasState.setAsyncPageNum(t)
        }
        )),
        i.globalSocketObj.on("file:import-start", (function() {
            l.readonlyManager.resetLastUpdatedAt(),
            ve(!0, !1, !1),
            d.L8(),
            Ot("Importing File... ", 0),
            console.log("Importing File...")
        }
        )),
        i.globalSocketObj.on("file:conversion-progress", (function(e) {
            ve(!0, !0, !1),
            console.log("Conversion Progress: " + e.percentComplete + "%"),
            Ot("Converting File to PDF...", e.percentComplete)
        }
        )),
        i.globalSocketObj.on("show:load", (function() {
            d.L8()
        }
        ));
        var tt = [];
        function ot() {
            i.globalSocketObj.emit("clear:cursors:room"),
            tt.push({
                pageIndex: this.pageIndex,
                numPages: this.numPages,
                task: function() {
                    c.canvasState.setAspectRatio(this.aspectRatio),
                    me(!1, !0);
                    var e, t, o = this._image;
                    if (this.position = this.getProject().view.center,
                    this.fitBounds(this.getProject().view.bounds),
                    this.fromUserId == c.userState.uid && i.globalSocketObj.emit("file:update-position", Ve(), this.getLayer().getName(), this.matrix, this.name),
                    r().project.layers[this.layerIndex]) {
                        var n = r().project.layers[this.layerIndex].clone({
                            insert: !1,
                            deep: !0
                        });
                        n.visible = !0;
                        var s = new a.Path.Rectangle({
                            point: [0, 0],
                            size: [150, 150]
                        });
                        n.children[0].fitBounds(r().project.view.bounds),
                        n.rasterize(r().project.view.resolution, !1).remove(),
                        n.remove(),
                        s.remove()
                    }
                    if (1 == this.pageIndex) {
                        var l = JSON.parse(r().project.activeLayer.exportJSON());
                        r().project.activeLayer.children.length <= 2 && l[1] && l[1].children && l[1].children[0] && l[1].children[0][1] && l[1].children[0][1].source && l[1].children[0][1].name.includes("pdf") && 1 == (0,
                        y.Dm)() && ($("#img-page-0").remove(),
                        !0)
                    }
                    var d = (e = n ? n.name : "refreshed").replace("page-", "");
                    if ((t = $("<canvas class='whiteboard-thumbnail' title='Page " + (+d + 1) + "' data-page-name='" + e + "' id='img-" + e + "' />").tooltipster()).click((function() {
                        if (!$(".whiteboard-thumbnail").attr("disabled")) {
                            $(".whiteboard-thumbnail").removeClass("active"),
                            $(this).addClass("active");
                            var e = $(this).data("page-name").replace("page-", "");
                            $('#select-page option[value="' + e + '"]').prop("selected", !0),
                            p.pageInteractions.changePage(e, !1, !1),
                            !1 === c.canvasState.isAsync && i.globalSocketObj.emit("file:page-change", +e)
                        }
                    }
                    )),
                    !1 === c.canvasState.readonlyView) {
                        (0,
                        y.oQ)(t);
                        var u = document.getElementById("img-" + e);
                        if (u) {
                            u.width = 40;
                            var g = u.getContext("2d");
                            g.fillRect(0, 0, 40, 147),
                            u.style.border = "1px solid rgb(180, 180, 180)",
                            g.drawImage(o, 0, 0, 40, 147),
                            $("#thumbnail-loading-message").remove()
                        }
                    }
                }
                .bind(this)
            })
        }
        function at(e) {
            ve(!0, !0, !1);
            var t = new FileReader;
            t.readAsDataURL(e),
            $(t).bind("loadend", (function(e) {
                var t = this.result;
                c.canvasState.incrementProjectObjectCount();
                var o = new a.Raster(t);
                o.position = _.center,
                o.name = "image:" + c.userState.uid + ":" + c.canvasState.projectObjectCount,
                o.type = "upload",
                o.onLoad = rt
            }
            ))
        }
        function rt() {
            var e = this.getBounds().getWidth()
              , t = this.getBounds().getHeight()
              , o = $("#the-canvas").width()
              , n = $("#the-canvas").height()
              , s = "upload" == this.type ? "image-upload-" + c.userState.uid + "-" + c.canvasState.projectObjectCount : JSON.stringify(this.getImage().src);
            e > o || t > n ? (I.exportSize ? this.fitBounds(new a.Rectangle({
                topLeft: I.exportSize.topLeft,
                bottomRight: I.exportSize.bottomRight
            })) : this.fitBounds(r().project.view.bounds),
            i.globalSocketObj.emit("image:add", Ve(), s, this.toDataURL("image/png"), this.matrix, this.name, !0, r().project.activeLayer.index)) : i.globalSocketObj.emit("image:add", Ve(), s, this.toDataURL("image/png"), this.matrix, this.name, !1, r().project.activeLayer.index)
        }
        i.globalSocketObj.on("file:done", (function(e) {
            d.L8(),
            new Promise((function(e) {
                !function t() {
                    if (!c.canvasState.loadingThumbnails)
                        return e();
                    setTimeout(t, 30)
                }()
            }
            )).then((function() {
                ve(!0, !0, !1);
                var t = e.firstPage;
                //!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                e.Images.map((function(e) {
                    var t;
                    if (null == e || null === (t = e.layers) || void 0 === t || !t.s3Key)
                        return console.error("Corrupted IMAGES during conversion: ", e);
                    ht[e.layerIndex] = [e.layers.s3Key],
                    0 != e.layerIndex && $("#select-page").append($("<option>", {
                        value: e.layerIndex,
                        text: "Page " + (e.layerIndex + 1)
                    }));
                    //! Added crossOrigin Property to allow source to be from s3
                    var o = new (r().Raster)({
                        crossOrigin: "anonymous",
                        source: e.imageUri
                    });
                    if (o.name = e.rasterName,
                    o.crossOrigin = "anonymous",
                    o.fromUserId = e.fromUserId,
                    o.aspectRatio = e.aspectRatio,
                    o.dimensions = e.dimensions,
                    o.layerIndex = e.layerIndex,
                    o.pageIndex = e.pageIndex,
                    o.numPages = e.numPages,
                    o.onLoad = ot,
                    void 0 !== r().project.layers["page-" + e.layerIndex])
                        r().project.layers["page-" + e.layerIndex].data.aspectRatio = e.aspectRatio,
                        r().project.layers["page-" + e.layerIndex].addChild(o),
                        r().project.layers["page-" + e.layerIndex].visible = !1;
                    else {
                        var a = new (r().Layer)({
                            name: "page-" + e.layerIndex,
                            insert: !1,
                            visible: !1,
                            data: {
                                aspectRatio: e.aspectRatio
                            }
                        });
                        a.addChild(o),
                        r().project.addLayer(a)
                    }
                    e.success && (console.log("Rasterizing Page " + e.pageIndex + " of " + e.numPages + "... (" + e.percent + ")"),
                    Ot("Rasterizing Page " + e.pageIndex + " of " + e.numPages + "...", e.percent))
                }
                ));
                //!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                var o = setInterval((function() {
                    if (tt.filter((function(e) {
                        return e.pageIndex == e.numPages
                    }
                    )).length > 0) {
                        console.log("Finished processing!!"),
                        c.canvasState.setCurrentPdfUpload(!1),
                        $("#add-page-thumbnail").remove(),
                        clearInterval(o),
                        tt = tt.sort((function(e, t) {
                            return e.pageIndex - t.pageIndex
                        }
                        ));
                        for (var e = 0; e < tt.length; e++)
                            tt[e].task();
                        if (c.userState.showWhiteboardControls || c.userState.userIsModerator) {
                            var a = $("<button id='add-page-thumbnail' title='Add Page'><i class='fa fa-plus fa-2x'></i></button>").tooltipster();
                            a.click((function() {
                                $("#add-page").click()
                            }
                            )),
                            (0,
                            y.oQ)(a)
                        }
                        tt = [],
                        (c.userState.showWhiteboardControls || c.userState.userIsModerator) && $("#tool-select-page").show(),
                        !1 === c.canvasState.isAsync && i.globalSocketObj.emit("file:page-change", +t, !0),
                        Qe = null,
                        d.VG(),
                        $('#select-page option[value="' + t + '"]').prop("selected", !0),
                        d.vs(),
                        !1 === c.canvasState.readonlyView && (0,
                        y.NM)(),
                        p.pageInteractions.changePage(t, !0, !0)
                    }
                }
                ), 2e3)
            }
            ))
        }
        )),
        i.globalSocketObj.on("file:error", (function(e) {
            e.fromUserId == c.userState.uid && alert(e.message),
            d.VG(),
            $("#canvas-container").show(),
            d.vs(),
            0 == r().project.layers.length && ($("#select-page").hide(),
            r().project.activeLayer = new a.Layer,
            r().project.activeLayer.setName("page-0"))
        }
        )),
        i.globalSocketObj.on("user:connect", (function(e) {
            u.hideAlertBar(),
            u.unpopulateAlertBar();
            for (var t = 0; t < r().project.activeLayer.children.length; t++)
                r().project.activeLayer.children[t].name && r().project.activeLayer.children[t].name.indexOf("cursor") > -1 && r().project.activeLayer.children[t].remove();
            null != e && (U = e),
            nt()
        }
        ));
        var nt = function() {
            $("#selected-whiteboard-user option").remove(),
            U && U.forEach((function(e) {
                $("#selected-whiteboard-user").append("<option value='" + e.userId + "'>" + e.userFullname + "</option>")
            }
            ))
        }
          , it = function(e) {
            for (var t = 0; t < r().project.activeLayer.children.length; t++)
                r().project.activeLayer.children[t].name && r().project.activeLayer.children[t].name.indexOf("cursor") > -1 && r().project.activeLayer.children[t].remove();
            !1 === c.canvasState.readonlyView && (e ? ($("#editbar").each((function() {
                this.style.setProperty("display", "block")
            }
            )),
            $(".draw-tool-li").show(),
            c.userState.userIsModerator || $(".close-whiteboard-li").each((function() {
                this.style.setProperty("display", "none", "important")
            }
            )),
            $("#more-li").each((function() {
                this.style.setProperty("display", "block")
            }
            )),
            $("#read-only-toolbar").each((function() {
                this.style.setProperty("display", "none")
            }
            )),
            r().project.layers.length > 1 && ($("#tool-select-page").show(),
            $("#add-page").show(),
            $("#add-page-thumbnail").show())) : ($(".draw-tool-li").each((function() {
                this.style.setProperty("display", "none", "important")
            }
            )),
            $(".draw-tool-li").each((function() {
                this.style.setProperty("display", "none", "important")
            }
            )),
            $("#read-only-toolbar").each((function() {
                this.style.setProperty("display", "flex")
            }
            )),
            $("#editbar").each((function() {
                this.style.setProperty("display", "none")
            }
            )),
            $("#more-li").each((function() {
                this.style.setProperty("display", "none")
            }
            )),
            $("#overflow-bottom-layer").each((function() {
                this.style.setProperty("display", "none", "important")
            }
            )),
            $("#add-page-thumbnail").remove()))
        };
        i.globalSocketObj.on("user:toggle-whiteboard-controls", (function(e, t, o, a, n) {
            !function(e, t, o, a, n) {
                if (!0 === c.canvasState.readonlyView)
                    return;
                if (c.userState.uid != e) {
                    if (t ? c.canvasState.setActivePresentation(!0) : c.canvasState.setActivePresentation(!1),
                    h.handlePresenterChange(t, o),
                    c.userState.userIsModerator)
                        if (t) {
                            for (var i = 0; i < r().project.activeLayer.children.length; i++)
                                r().project.activeLayer.children[i].name && r().project.activeLayer.children[i].name.indexOf("cursor") > -1 && r().project.activeLayer.children[i].remove();
                            $(".toggle-whiteboard-lock").data("locked", !0),
                            $(".toggle-whiteboard-lock").addClass("whiteboard-locked"),
                            $(".toggle-whiteboard-lock i").removeClass("fas fa-unlock"),
                            $(".toggle-whiteboard-lock i").addClass("fa-lock"),
                            $("#tooltip-lock-button-body").text("Unlock this whiteboard so others can edit")
                        } else
                            $("#tooltip-lock-button-header").hide(),
                            $(".toggle-whiteboard-lock").data("locked", !1),
                            $(".toggle-whiteboard-lock i").removeClass("fa-lock"),
                            $(".toggle-whiteboard-lock i").addClass("fas fa-unlock"),
                            $(".toggle-whiteboard-lock").removeClass("whiteboard-locked"),
                            $("#tooltip-lock-button-body").text("Lock this whiteboard so others can not edit");
                    else {
                        if (c.userState.setShowWhiteboardControls(!t),
                        it(c.userState.showWhiteboardControls),
                        t) {
                            $("#the-canvas").css({
                                cursor: "crosshair"
                            }),
                            r().project.activeLayer.selected = !1;
                            for (var s = 0; s < r().project.layers.length; s++)
                                r().project.layers[s].selected = !1
                        } else {
                            switch (z) {
                            case "draw":
                            case "pencil":
                            case "eraser":
                                $("#the-canvas").css({
                                    cursor: "crosshair"
                                });
                                break;
                            case "line":
                            case "ellipse":
                            case "rectangle":
                            case "signature":
                                $("#the-canvas").css("cursor", "crosshair");
                                break;
                            case "text":
                                $("#the-canvas").css({
                                    cursor: "text"
                                });
                                break;
                            case "checkmark":
                            default:
                                $("#the-canvas").css({
                                    cursor: "crosshair"
                                })
                            }
                            $("#overflow-bottom-layer").each((function() {
                                this.style.setProperty("display", "none")
                            }
                            ))
                        }
                        if (c.userState.showWhiteboardControls && !1 === c.canvasState.readonlyView) {
                            $("#add-page-thumbnail").remove();
                            var l = $("<button id='add-page-thumbnail' title='Add Page'><i class='fa fa-plus fa-2x'></i></button>").tooltipster();
                            l.click((function() {
                                $("#add-page").click()
                            }
                            )),
                            $("#tool-select-page").show(),
                            (0,
                            y.NM)(),
                            $(".whiteboard-thumbnail").removeAttr("disabled"),
                            (0,
                            y.oQ)(l)
                        } else
                            $(".cursor-tool").click(),
                            $("#tool-select-page").hide(),
                            $(".whiteboard-thumbnail").attr("disabled", "disabled"),
                            //! Make canvas conform to the aspect ratio of presenter
                            Re(a.aspect, a.ogCenter)
                    }
                    (c.userState.userIsModerator || c.userState.showWhiteboardControls) && ve(!1, !1, !0)
                } else
                    c.userState.setUserIsModerator(t),
                    t ? (n && h.updatePList(n),
                    h.handlePresenterMenuDisplay()) : (h.updatePList([]),
                    $("#presentees-holder").hide())
            }(e, t, o, a, n)
        }
        )),
        i.globalSocketObj.on("user:presenter-handoff", (function(e, t) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            c.userState.uid == e) {
                c.canvasState.setActivePresentation(!0),
                c.userState.setUserIsPresenter(!0),
                h.handlePresenterAssign(),
                h.updatePList(t);
                for (var o = 0; o < r().project.activeLayer.children.length; o++)
                    r().project.activeLayer.children[o].name && r().project.activeLayer.children[o].name.indexOf("cursor") > -1 && r().project.activeLayer.children[o].remove();
                $(".toggle-whiteboard-lock").data("locked", !0),
                $(".toggle-whiteboard-lock").addClass("whiteboard-locked"),
                $(".toggle-whiteboard-lock i").removeClass("fas fa-unlock"),
                $(".toggle-whiteboard-lock i").addClass("fa-lock"),
                $("#tooltip-lock-button-body").text("Unlock this whiteboard so others can edit"),
                ve(!1, !1, !0);
                var a = $(window).innerHeight() - $("#editbar").outerHeight() || 0 - $("#read-only-toolbar").outerHeight() || 0 - (0,
                y.O$)() || -2
                  , n = $("#canvas-container").innerWidth() / a;
                i.globalSocketObj.emit("user:toggle-whiteboard-controls", {
                    wbIsLocked: !0,
                    userData: {
                        userFullname: c.userState.myFullName,
                        userId: c.userState.uid,
                        allowLock: !0,
                        userIsModerator: !0
                    },
                    ratioObject: {
                        aspect: n,
                        center: r().project.view.center,
                        ogCenter: T
                    },
                    initiatorUid: c.userState.uid
                })
            } else
                h.changeLockColorToInactive()
        }
        )),
        i.globalSocketObj.on("remove:presentee", (function(e) {
            h.removeP(e)
        }
        )),
        i.globalSocketObj.on("add:presentee", (function(e) {
            h.addP(e)
        }
        )),
        $("#presenter-box").click((function() {
            h.togglePresenterList()
        }
        )),
        $(".presentees-icon").click((function() {
            $(".presentees-icon").hide(),
            $(".close-presentees-icon").show(),
            $("#presentees-holder ul").show(),
            $("#presentees-holder > div:first-of-type").hide(),
            $("#presentees-holder > section:first-of-type").show(),
            $("#presentees-holder > div:nth-of-type(2)").css("display", "flex"),
            $("#presentees-holder div section").show()
        }
        )),
        $(".close-presentees-icon").click((function() {
            $(".presentees-icon").show(),
            $(".close-presentees-icon").hide(),
            $("#presentees-holder ul").hide(),
            $("#presentees-holder div section").hide(),
            $("#presentees-holder > div:first-of-type").show(),
            $("#presentees-holder > section:first-of-type").hide(),
            $("#presentees-holder > div:nth-of-type(2)").css("display", "none")
        }
        )),
        i.globalSocketObj.on("disconnect", (function() {
            u.populateAlertBarLostConnection(),
            u.showAlertBar(!0),
            z = "null",
            it(!1)
        }
        )),
        i.globalSocketObj.on("terminated", (function() {
            u.populateAlertBarAdminClose(),
            u.showAlertBar(!0),
            z = "null",
            it(!1),
            i.globalSocketObj.emit("terminated")
        }
        )),
        i.globalSocketObj.on("admin-message", (function(e) {
            u.populateAlertBarDynamic("Direct message from Admin", e),
            u.showAlertBar(!0)
        }
        )),
        i.globalSocketObj.on("server-routing-error", (function() {
            $("#server-routing-error").show(),
            z = "null",
            it(!1)
        }
        )),
        i.globalSocketObj.on("reconnect", (function(e) {
            window.location.reload(!1)
        }
        ));
        var st = [];
        function ct(e, t) {
            st.splice(0, st.length),
            r().project.layers["page-" + e].children.forEach((function(e) {
                e.name && e.name.includes("signature") && (+e.data.forUserId != +t || e.data.hasBeenSigned || st.push({
                    itemName: e.name,
                    forUserFullname: e.data.forUserFullname,
                    forUserId: e.data.forUserId
                }))
            }
            )),
            st.length > 0 ? $(".sign-tool-li").each((function() {
                this.style.setProperty("display", "block")
            }
            )) : $(".sign-tool-li").each((function() {
                this.style.setProperty("display", "none")
            }
            )),
            c.canvasState.setSignatureFieldCount(st.length)
        }
        $(".sign-tool").click((function() {
            $("#user-signature-dialog").data("signatureTarget", "ALL"),
            c.canvasState.setActiveSigning(!0),
            $("#user-signature-dialog").modal("show")
        }
        ));
        var lt = function e(t, o, a, r) {
            if (t > 3e3)
                return r("Image failed to load");
            setTimeout((function() {
                return !1 === o.loaded ? e(Math.pow(t, 2), o, a, r) : a("loading complete")
            }
            ), t)
        }
          , dt = function(e) {
            return e.fitBounds(new a.Rectangle({
                topLeft: I.exportSize.topLeft,
                bottomRight: I.exportSize.bottomRight
            }))
        }
          , ut = function() {
            if (r().project.activeLayer) {
                var e = r().project.activeLayer.children[0];
                e && e.name.toLowerCase().includes("pdf") && I.exportSize && (!1 === e.loaded ? new Promise((function(t, o) {
                    lt(5, e, t, o)
                }
                )).then((function() {
                    dt(e)
                }
                )).catch((function(e) {
                    console.log("Repair failure", e)
                }
                )) : dt(e))
            }
        }
          , pt = []
          , gt = 0
          , ht = [];
        function ft(e) {
            function t() {
                if (pt.length > 0)
                    setTimeout((function() {
                        ft(pt[0])
                    }
                    ), 1);
                else {
                    c.canvasState.setIsLoadingThumbnails(!1),
                    $('#select-page option[value="' + gt + '"]').last().remove();
                    for (var e = 0; e < r().project.layers.length; e++)
                        $("#select-page").children()[e] || $("#select-page").append($("<option>", {
                            value: e,
                            text: "Page " + (e + 1)
                        }));
                    //voluminous
                    var extraPages = window.utils.getPages();
                    extraPages.reverse();
                    extraPages.forEach(p => {
                        $("#select-page").prepend($("<option>", {
                            value: p-1,
                            text: "Today: " + (p)
                        }));
                    });
                    if($('#select-page option[value="' + gt + '"]:contains("Today")').length)
                        $('#select-page option[value="' + gt + '"]:contains("Today")').prop("selected", !0);
                    else
                        $('#select-page option[value="' + gt + '"]').prop("selected", !0);
                    p.pageInteractions.changePage($("#select-page").val(), !0, !0);
                }
            }
            c.canvasState.setIsLoadingThumbnails(!0),
            pt.splice(0, 1),
            mt("page-" + e).then(t()).catch((function(e) {
                console.error(e),
                t()
            }
            ))
        }
        function mt(e) {
            return new Promise((function(t, o) {
                try {
                    if (!c.canvasState.currentPdfUpload) {
                        var n = r().project.layers[e].clone({
                            insert: !1,
                            deep: !0
                        });
                        //! Layer bounds is no longer reliable for INITIAL thumbnail update
                        if (n.visible = !0,
                        I.topLeft)
                            var i = new a.Path.Rectangle({
                                point: [I.topLeft.x, I.topLeft.y],
                                size: [I.width, I.height]
                            });
                        var s = new a.Group(i,n);
                        s.clipped = !0;
                        var l = s.rasterize(r().project.view.resolution, !1)
                          , d = l.toDataURL()
                          , u = n.name.replace("page-", "");
                        l && l.remove(),
                        s && s.remove(),
                        n && n.remove(),
                        i && i.remove();
                        var p = new Image;
                        p.crossOrigin = "use-credentials",
                        p.src = d,
                        p.onload = function(e) {
                            var o = document.getElementById("img-page-" + u);
                            if (o) {
                                e.preventDefault = !0;
                                var a = o.getContext("2d");
                                return a.clearRect(0, 0, o.width, o.height),
                                a.fillStyle = "rgb(255,255,255)",
                                a.fillRect(0, 0, 40, 147),
                                a.drawImage(e.target, 0, 0, 40, 147),
                                t("Completed Thumbnail Drawing")
                            }
                        }
                    }
                } catch (e) {
                    return o("There was an error while updating the thumbnails:\n" + e)
                }
            }
            ))
        }
        function vt(e) {
            r().project.activeLayer.children["cursor:" + e] && r().project.activeLayer.children["cursor:" + e].remove(),
            r().project.activeLayer.children["cursor-text:" + e] && r().project.activeLayer.children["cursor-text:" + e].remove(),
            r().project.activeLayer.children["cursor-text-background:" + e] && r().project.activeLayer.children["cursor-text-background:" + e].remove()
        }
        i.globalSocketObj.on("project:load:init", (function(e) {
            var t, o = e.projectJson, a = e.pageNum, s = e.locked, u = e.objectCount, g = e.userData, v = e.s3ImageNoAuth, b = e.s3AuthedImage, S = e.pageCount, j = e.isPresenter, k = e.presenteeList, P = e.pageLoadOrder, A = e.lastUpdateTimestamp;
            if (P = (0,
            w.v)(P),
            ht = v,
            d.L8(),
            me(!1, !1),
            c.userState.setUserIsModerator(m.l.convertUrlPropToBool(g.userIsModerator)),
            d.uq(m.l.convertUrlPropToBool(g.allowClose)),
            c.canvasState.setProjectObjectCount(u),
            c.userState.setShowWhiteboardControls(!s),
            c.userState.setUserFullname(g.userFullname),
            f.shouldShowDownload(g.allowDownload),
            d.ft(g.color_scheme),
            c.userState.userIsModerator || c.userState.showWhiteboardControls || $(".cursor-tool").click(),
            c.userState.userIsModerator ? (c.userState.setShowWhiteboardControls(!0),
            f.handleLockTooltipPopupOnInit(),
            it(!0),
            f.handleDisplayCloseWBButton(c.canvasState.noWrapperView),
            f.handleWhiteboardLockProperties(m.l.convertUrlPropToBool(g.allowLock), s)) : it(!s),
            d.yX(localStorage.getItem("tool-hint-shown")),
            o) {
                gt = a,
                pt = C(P),
                c.canvasState.setIsLoadingThumbnails(!0);
                var L = o.project;
                "object" === O(L) && (L = JSON.stringify(L)),
                L = n.an(L),
                !1 === c.canvasState.readonlyView ? (d.Rk(),
                d.iH()) : l.readonlyManager.setLastUpdatedAt(+A),
                (t = c.canvasState.readonlyView ? null : b,
                new Promise((function(e) {
                    if (null === t)
                        return e("No preload");
                    var o = t.map((function(e, t) {
                        return new Promise((function(t) {
                            if (!e)
                                return t("No images");
                            var o = e.map((function(e, t) {
                                return new Promise((function(t) {
                                    var o = new Image;
                                    o.crossOrigin = "use-credentials",
                                    o.src = e,
                                    o.onload = function() {
                                        return t("Image Loaded")
                                    }
                                    ,
                                    o.onerror = function(e) {
                                        return console.log("An image broke on initial load", e),
                                        t("Image Replaced")
                                    }
                                }
                                ))
                            }
                            ));
                            Promise.all(o).finally((function() {
                                return t("This page is done")
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    Promise.all(o).finally((function() {
                        return e("Completed load")
                    }
                    ))
                }
                ))).finally((function() {
                    L = n.XM({
                        s3Urls: b,
                        dbUrls: v,
                        json: L
                    }),
                    r().project.activeLayer.remove(),
                    r().project.clear(),
                    r().project.importJSON(L),
                    void 0 === r().project.activeLayer.data.aspectRatio ? c.canvasState.setAspectRatio(c.staticGlobals.DefaultAspectRatio) : c.canvasState.setAspectRatio(parseFloat(r().project.activeLayer.data.aspectRatio)),
                    f.handleSelectPageInit(a, s, c.userState.userIsModerator),
                    p.pageInteractions.changePage(a, !1, !1, !0),
                    (0,
                    y.dm)(),
                    function(e) {
                        if (r().project.layers["page-" + e])
                            for (var t = 0; t < r().project.layers["page-" + e].children.length; t++) {
                                var o = r().paper.project.layers["page-" + e].children[t].name;
                                if (o && (o.indexOf("text:") > -1 && (r().project.layers["page-" + e].children[t].onClick = pe),
                                o.indexOf("signature:") > -1))
                                    if (r().project.layers["page-" + e].children[t].data.forUserId == c.userState.uid) {
                                        r().project.layers["page-" + e].children[t].onClick = ge;
                                        var a = r().project.layers["page-" + e].children[t].name.replace("signature:signature:", "signature-label:signature:");
                                        r().project.layers["page-" + e].children[t].children[a] && (r().project.layers["page-" + e].children[t].children[a].content = "Please Sign Here",
                                        c.canvasState.setSignatureFieldCount(c.canvasState.mySignatureFieldCount + 1))
                                    } else
                                        c.userState.showWhiteboardControls && (r().project.layers["page-" + e].children[t].onClick = ge)
                            }
                    }(a),
                    function(e) {
                        var t = e.isDefaultPresenter
                          , o = e.whiteboardLocked
                          , a = e.presentees;
                        if (c.userState.setUserIsPresenter(t),
                        h.updatePList(a),
                        c.userState.userIsPresenter && o) {
                            h.handlePresenterChange(o, c.userState.myFullName, !0);
                            var n = r().project.view
                              , s = $("#canvas-container").innerWidth() / $("#canvas-container").innerHeight();
                            Fe(),
                            i.globalSocketObj.emit("canvas:send:view-sizing", !1, s, T, n.center, n.zoom / N)
                        } else
                            i.globalSocketObj.emit("canvas:request:view-sizing"),
                            f.closeToolbarDropdown(),
                            h.changeLockColorToInactive();
                        !c.userState.userIsPresenter && o && c.canvasState.setActivePresentation(!0)
                    }({
                        isDefaultPresenter: j,
                        whiteboardLocked: s,
                        presentees: k
                    }),
                    c.canvasState.currentPdfUpload || !0 === c.canvasState.readonlyView ? (c.canvasState.setIsLoadingThumbnails(!1),
                    d.vs()) : ((c.userState.showWhiteboardControls || c.userState.userIsModerator) && $("#thumbnail-loading-message").show(),
                    function(e) {
                        return new Promise((function(t) {
                            for (var o = [], a = 0; a < e; a++) {
                                var r = $("<canvas class='whiteboard-thumbnail' title='Page " + (+a + 1) + "' data-page-name='page-" + a + "' id='img-page-" + a + "'/>").tooltipster();
                                o.push({
                                    name: "page-" + a,
                                    id: +a,
                                    html: r
                                })
                            }
                            if (o.sort((function(e, t) {
                                return e.id - t.id
                            }
                            )),
                            (0,
                            y.LM)(),
                            (0,
                            y.oQ)(o.map((function(e) {
                                return e.html
                            }
                            ))),
                            c.userState.showWhiteboardControls || c.userState.userIsModerator || $(".whiteboard-thumbnail").attr("disabled", "disabled"),
                            $(".whiteboard-thumbnail").click((function() {
                                if (!$(".whiteboard-thumbnail").attr("disabled")) {
                                    var e = $(this).data("page-name").replace("page-", "");
                                    -1 === pt.indexOf(Number(e)) && ($(".whiteboard-thumbnail").removeClass("active"),
                                    $(this).addClass("active"),
                                    f.updateSelectPageUi(e),
                                    p.pageInteractions.changePage(e, !1, !1),
                                    !1 === c.canvasState.isAsync && i.globalSocketObj.emit("file:page-change", +e))
                                }
                            }
                            )),
                            c.userState.showWhiteboardControls || c.userState.userIsModerator) {
                                var n = $("<button id='add-page-thumbnail' title='Add Page'><i class='fa fa-plus fa-2x'></i></button>").tooltipster();
                                n.click((function() {
                                    $("#add-page").click()
                                }
                                )),
                                (0,
                                y.oQ)(n)
                            }
                            function s(e) {
                                return new Promise((function(t) {
                                    var o = []
                                      , a = 0
                                      , r = e.length;
                                    for (var n in e) {
                                        var i = new Image;
                                        i.crossOrigin = "anonymous",
                                        i.onload = s,
                                        i.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=",
                                        o.push(i)
                                    }
                                    function s() {
                                        ++a >= r && t(o)
                                    }
                                }
                                ))
                            }
                            s(o || {}).then((function(e) {
                                c.canvasState.setIsLoadingThumbnails(!1),
                                Promise.all(e.map((function(e, t) {
                                    return new Promise((function(o) {
                                        var a = document.getElementById("img-page-" + t);
                                        if (a) {
                                            a.width = 40;
                                            var r = a.getContext("2d");
                                            return r.fillStyle = "rgb(255,255,255)",
                                            r.fillRect(0, 0, 60, 147),
                                            r.imageSmoothingQuality = "high",
                                            a.style.border = "1px solid rgb(180, 180, 180)",
                                            r.drawImage(e, 0, 0, 40, 147),
                                            o("Thumbnail Complete")
                                        }
                                    }
                                    ))
                                }
                                ))).then((function() {
                                    return t("All thumbnails complete")
                                }
                                ))
                            }
                            )),
                            $("#thumbnail-loading-message").hide()
                        }
                        ))
                    }(S).then((function() {
                        (0,
                        p.addFocusToThumbnail)(a),
                        !1 === c.canvasState.readonlyView && d.q6(),
                        d.vs(),
                        ct(a, g.userId),
                        pt.length > 0 ? mt("page-" + a).then(ft(pt[0])).catch((function(e) {
                            console.error(e),
                            ft(pt[0])
                        }
                        )) : mt("page-" + a)
                    }
                    )))
                }
                ))
            }
        }
        )),
        setTimeout((function() {
            setInterval((function() {
                mt(r().project.activeLayer.name)
            }
            ), 1e4)
        }
        ), 1e4),
        i.globalSocketObj.on("mongo:update:complete", (function(e, t) {}
        )),
        i.globalSocketObj.on("current:upload", (function() {
            c.canvasState.setCurrentPdfUpload(!0)
        }
        )),
        $("#tool-hints-modal").hover((function() {
            $("#tool-hints-modal").fadeOut(500),
            $("#tool-hints").fadeIn(500),
            $("#tool-hints").css("display", "flex"),
            $("#tool-hints").on("mouseleave", (function() {
                $("#tool-hints").fadeOut(500),
                $("#tool-hints-modal").fadeIn(500),
                $("#tool-hints-modal").css("display", "flex")
            }
            ))
        }
        )),
        $("#tool-hints-modal").click((function() {
            $("#tool-hints-modal").fadeOut(500),
            $("#tool-hints").fadeIn(500),
            $("#tool-hints").css("display", "flex"),
            $("#tool-hints").on("click", (function() {
                $("#tool-hints").fadeOut(500),
                $("#tool-hints-modal").fadeIn(500),
                $("#tool-hints-modal").css("display", "flex")
            }
            ))
        }
        )),
        i.globalSocketObj.on("project:load:error", (function() {
            u.populateAlertBarLostConnection(),
            u.showAlertBar(!0)
        }
        )),
        i.globalSocketObj.on("canvas:clear", (function(e, t) {
            l.readonlyManager.resetLastUpdatedAt(),
            He(t)
        }
        )),
        i.globalSocketObj.on("loading:start", (function() {
            l.readonlyManager.resetLastUpdatedAt(),
            d.L8()
        }
        )),
        i.globalSocketObj.on("loading:end", (function() {
            $("#canvas-container").css("background-image", "none"),
            !1 === c.canvasState.readonlyView && (0,
            y.b0)()
        }
        )),
        i.globalSocketObj.on("canvas:undo:disabled", (function(e) {
            $("#undo").prop("disabled", e)
        }
        )),
        i.globalSocketObj.on("draw:start", (function(e, t, o) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            e !== c.userState.uid && t) {
                var a = JSON.parse(t);
                vt(e),
                yt(e, a)
            }
        }
        )),
        i.globalSocketObj.on("draw:progress", (function(e, t, o) {
            e !== c.userState.uid && t && o && (vt(e),
            wt(e, o))
        }
        )),
        i.globalSocketObj.on("draw:end", (function(e, t) {
            l.readonlyManager.resetLastUpdatedAt(),
            St(e, t)
        }
        )),
        i.globalSocketObj.on("item:remove", (function(e, t, o) {
            l.readonlyManager.resetLastUpdatedAt(),
            r().project.layers["page-".concat(e)].children[o] && (r().project.layers["page-".concat(e)].children[o].remove(),
            _.draw())
        }
        )),
        i.globalSocketObj.on("item:move:start", (function() {}
        )),
        i.globalSocketObj.on("item:move", (function(e, t, o, a) {
            t != c.userState.uid && (vt(t),
            r().project.deselectAll(),
            o.forEach((function(e) {
                r().project.activeLayer.children[e] && (r().project.activeLayer.children[e].position.x += a[1],
                r().project.activeLayer.children[e].position.y += a[2])
            }
            ))),
            _.draw()
        }
        )),
        i.globalSocketObj.on("item:move:undo", (function(e, t) {
            l.readonlyManager.resetLastUpdatedAt(),
            e != c.userState.uid && (t = JSON.parse(t),
            vt(e),
            r().project.deselectAll(),
            t.forEach((function(e) {
                r().project.activeLayer.children[e.name] && (r().project.activeLayer.children[e.name].position.x = e.originX,
                r().project.activeLayer.children[e.name].position.y = e.originY)
            }
            )),
            _.draw())
        }
        )),
        i.globalSocketObj.on("item:color:set", (function(e, t, o) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            t != c.userState.uid) {
                for (n in o = JSON.parse(o)) {
                    var a = o[n];
                    if (r().project.activeLayer.children[a.name])
                        if (a.name.indexOf("text:") > -1)
                            r().project.activeLayer.children[a.name].fillColor = o[n].color;
                        else if (a.name.indexOf("arrow:") > -1)
                            r().project.activeLayer.children[a.name].fillColor = o[n].color,
                            r().project.activeLayer.children[a.name].strokeColor = o[n].color;
                        else if (a.name.indexOf("signature:signature:") > -1)
                            for (var n = 0; n < r().project.activeLayer.children[a.name].children.length; n++)
                                r().project.activeLayer.children[a.name].children[n].name.indexOf("signature-box:signature:") > -1 && (r().project.activeLayer.children[a.name].children[n].fillColor = o[n].color,
                                r().project.activeLayer.children[a.name].children[n].opacity = .2),
                                r().project.activeLayer.children[a.name].children[n].name.indexOf("signature-border:signature:") > -1 && (r().project.activeLayer.children[a.name].children[n].strokeColor = o[n].color);
                        else
                            r().project.activeLayer.children[a.name].strokeColor = o[n].color
                }
                _.draw()
            }
        }
        )),
        i.globalSocketObj.on("item:add", (function(e, t) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            e != c.userState.uid) {
                vt(e),
                r().project.deselectAll(),
                r().project.activeLayer.importJSON(t);
                for (var o = 0; o < r().project.activeLayer.children.length; o++)
                    "PointText" == r().project.activeLayer.children[o].className && void 0 === r().project.activeLayer.children[o].onClick && (r().project.activeLayer.children[o].onClick = pe);
                _.draw()
            }
        }
        )),
        i.globalSocketObj.on("text:add", (function(e, t, o, n, i) {
            l.readonlyManager.resetLastUpdatedAt();
            var s = JSON.parse(o);
            if (void 0 !== r().project.layers[s.page]) {
                t != c.userState.uid && vt(t);
                var d = {
                    point: new a.Point(s.point[0],s.point[1]),
                    content: "       ",
                    fillColor: s.color,
                    fontFamily: "Courier New",
                    fontWeight: "bold",
                    fontSize: s.fontSize || 12,
                    justification: "left",
                    name: s.name
                }
                  , u = new a.PointText(d);
                u.selected = !0,
                t == c.userState.uid ? u.visible = !1 : u.visible = !0,
                r().project.layers[s.page] && r().project.layers[s.page].addChild(u),
                _.draw()
            }
        }
        )),
        i.globalSocketObj.on("text:update:start", (function(e, t, o) {
            l.readonlyManager.resetLastUpdatedAt(),
            t != c.userState.uid && (vt(t),
            r().project.activeLayer.children[o] && (r().project.activeLayer.children[o].selected = !0,
            r().project.activeLayer.children[o].selectedColor = r().project.activeLayer.children[o].fillColor,
            _.draw()))
        }
        )),
        i.globalSocketObj.on("text:update", (function(e, t, o, a, n) {
            if (t != c.userState.uid) {
                if (void 0 === r().project.layers[o])
                    return;
                vt(t);
                var i = r().project.layers[o].children[a];
                i && (i.content = n,
                _.draw())
            }
        }
        )),
        i.globalSocketObj.on("text:update:end", (function(e, t, o) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            vt(t),
            r().project.layers[o.page] && r().project.layers[o.page].children) {
                if (r().project.layers[o.page].children[o.name])
                    r().project.layers[o.page].children[o.name].content = o.content,
                    r().project.layers[o.page].children[o.name].fillColor = o.color,
                    r().project.layers[o.page].children[o.name].selected = !1,
                    r().project.layers[o.page].children[o.name].visible = !0,
                    r().project.layers[o.page].children[o.name].onClick = pe;
                else {
                    console.error("ERROR:  text:update:end textObject not found!");
                    var n = {
                        point: new a.Point(o.point[0],o.point[1]),
                        content: o.content,
                        fillColor: o.color,
                        fontFamily: "Courier New",
                        fontWeight: "bold",
                        fontSize: o.fontSize || 12,
                        justification: "left",
                        name: o.name
                    }
                      , i = new a.PointText(n);
                    i.selected = !1,
                    i.visible = !0,
                    i.onClick = pe,
                    r().project.layers[o.page].addChild(i)
                }
                _.draw()
            }
        }
        )),
        i.globalSocketObj.on("item:font:change", (function(e, t, o, a) {
            l.readonlyManager.resetLastUpdatedAt(),
            t != c.userState.uid && r().project.activeLayer.children[o] && (r().project.activeLayer.children[o].fontSize = a,
            _.draw())
        }
        )),
        i.globalSocketObj.on("ellipse:start", (function(e) {
            l.readonlyManager.resetLastUpdatedAt()
        }
        )),
        i.globalSocketObj.on("ellipse:progress", (function(e, t, o) {
            t !== c.userState.uid && o && (vt(t),
            jt(e, o))
        }
        )),
        i.globalSocketObj.on("ellipse:end", (function(e, t, o) {
            l.readonlyManager.resetLastUpdatedAt(),
            vt(t),
            jt(e, o)
        }
        )),
        i.globalSocketObj.on("rectangle:start", (function() {
            l.readonlyManager.resetLastUpdatedAt()
        }
        )),
        i.globalSocketObj.on("rectangle:progress", (function(e, t, o) {
            t != c.userState.uid && (vt(t),
            $t(e, o))
        }
        )),
        i.globalSocketObj.on("rectangle:end", (function(e, t, o) {
            l.readonlyManager.resetLastUpdatedAt(),
            vt(t),
            $t(e, o)
        }
        )),
        i.globalSocketObj.on("signature:add", (function(e, t, o) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            vt(t),
            c.userState.showWhiteboardControls && $("#undo").prop("disabled", !1),
            (o = JSON.parse(o)).forUserId != t && c.userState.uid != t) {
                var n;
                n = o.forUserId == c.userState.uid ? "Please Sign Here" : o.forUserFullname + "'s Signature",
                r().project.activeLayer.children["signature:" + o.name] && r().project.activeLayer.children["signature:" + o.name].remove();
                var i = new a.Path.Rectangle({
                    name: "signature-box:" + o.name,
                    topLeft: new a.Point(o.topLeft[1],o.topLeft[2]),
                    bottomRight: new a.Point(o.bottomRight[1],o.bottomRight[2]),
                    fillColor: "#f0f0f0",
                    opacity: .5
                })
                  , s = new a.Path.Rectangle({
                    name: "signature-border:" + o.name,
                    topLeft: new a.Point(o.topLeft[1],o.topLeft[2]),
                    bottomRight: new a.Point(o.bottomRight[1],o.bottomRight[2]),
                    strokeColor: o.strokeColor,
                    strokeWidth: 2
                })
                  , d = new a.Point((o.topLeft[1] + o.bottomRight[1]) / 2,(o.topLeft[2] + o.bottomRight[2]) / 2)
                  , u = {
                    name: "signature-label:" + o.name,
                    point: d,
                    content: n,
                    fillColor: "#000",
                    fontFamily: "Courier New",
                    fontWeight: "bold",
                    fontSize: 12,
                    justification: "center"
                }
                  , p = new a.PointText(u);
                p.visible = !0,
                (q = new a.Group({
                    name: "signature:" + o.name,
                    children: [i, s, p],
                    data: {
                        forUserId: o.forUserId
                    }
                })).onClick = ge,
                _.draw(),
                ct(r().project.activeLayer.name.split("-")[1], c.userState.uid)
            }
        }
        )),
        i.globalSocketObj.on("signature:update", (function(e, t, o) {
            l.readonlyManager.resetLastUpdatedAt(),
            vt(t),
            o = JSON.parse(o),
            r().project.activeLayer.children["signature:" + o.targetObjectName] && r().project.activeLayer.children["signature:" + o.targetObjectName].children["signature-label:" + o.targetObjectName] && (r().project.activeLayer.children["signature:" + o.targetObjectName].data = {
                forUserId: o.forUserId,
                forUserFullname: o.forUserFullname
            },
            o.forUserId == c.userState.uid ? r().project.activeLayer.children["signature:" + o.targetObjectName].children["signature-label:" + o.targetObjectName].content = "Please Sign Here" : r().project.activeLayer.children["signature:" + o.targetObjectName].children["signature-label:" + o.targetObjectName].content = o.forUserFullname + "'s Signature");
            var n = new a.Path.Rectangle({
                name: "signature-box:" + o.targetObjectName,
                topLeft: new a.Point(o.topLeft[1],o.topLeft[2]),
                bottomRight: new a.Point(o.bottomRight[1],o.bottomRight[2]),
                fillColor: o.strokeColor,
                opacity: .5
            })
              , i = new a.Path.Rectangle({
                name: "signature-border:" + o.targetObjectName,
                topLeft: new a.Point(o.topLeft[1],o.topLeft[2]),
                bottomRight: new a.Point(o.bottomRight[1],o.bottomRight[2]),
                strokeColor: o.strokeColor,
                strokeWidth: 2
            })
              , s = new a.Point((o.topLeft[1] + o.bottomRight[1]) / 2,(o.topLeft[2] + o.bottomRight[2]) / 2)
              , d = {
                name: "signature-label:" + o.targetObjectName,
                point: s,
                content: "Please Sign Here",
                fillColor: "#000",
                fontFamily: "Courier New",
                fontWeight: "bold",
                fontSize: 12,
                justification: "center"
            }
              , u = new a.PointText(d);
            u.visible = !0,
            (q = new a.Group({
                name: "signature:" + o.targetObjectName,
                children: [n, i, u],
                data: {
                    forUserId: o.forUserId
                }
            })).onClick = ge,
            _.draw()
        }
        )),
        i.globalSocketObj.on("signature:signed", (function(e, t, o, a) {
            if (l.readonlyManager.resetLastUpdatedAt(),
            t != c.userState.uid && (a = JSON.parse(a),
            r().project.activeLayer.children[o])) {
                for (var n = 0; n < r().project.activeLayer.children[o].children.length; n++)
                    r().project.activeLayer.children[o].children[n].name ? -1 == r().project.activeLayer.children[o].children[n].name.indexOf("signature-box:signature:") && -1 == r().project.activeLayer.children[o].children[n].name.indexOf("signature-border:signature:") && (r().project.activeLayer.children[o].children[n].remove(),
                    n--) : (r().project.activeLayer.children[o].children[n].remove(),
                    n--);
                a.forEach((function(e) {
                    r().project.activeLayer.children[o].importJSON(e)
                }
                ));
                var i = o.replace("signature:signature:", "signature-box:signature:");
                r().project.activeLayer.children[o].children[i] && (r().project.activeLayer.children[o].children[i].opacity = .2,
                r().project.activeLayer.children[o].children[i].bringToFront()),
                r().project.activeLayer.children[o].data.hasBeenSigned = !0
            }
        }
        )),
        i.globalSocketObj.on("line:start", (function() {
            l.readonlyManager.resetLastUpdatedAt()
        }
        )),
        i.globalSocketObj.on("line:progress", (function(e, t, o) {
            t != c.userState.uid && (vt(t),
            kt(e, o))
        }
        )),
        i.globalSocketObj.on("line:end", (function(e, t, o) {
            l.readonlyManager.resetLastUpdatedAt(),
            vt(t),
            kt(e, o)
        }
        )),
        i.globalSocketObj.on("checkmark:add", (function(e, t, o) {
            var n = "page-".concat(e);
            if (o = JSON.parse(o),
            r().project.layers[n]) {
                l.readonlyManager.resetLastUpdatedAt();
                var i = new a.Path({
                    name: o.name,
                    strokeColor: o.strokeColor,
                    strokeWidth: o.strokeWidth,
                    segments: o.segments,
                    closed: !1
                });
                r().project.layers[n].addChild(i)
            }
        }
        )),
        i.globalSocketObj.on("cursor:move", (function(e, t, o) {
            if (ae() && e == Ve() && !c.canvasState.activelySigning && (t != c.userState.uid || "cursor" == z)) {
                0,
                vt(t);
                new a.Path.Ellipse({
                    name: "cursor:" + t,
                    center: new a.Point(o.x,o.y),
                    radius: new a.Point(10,10),
                    fillColor: o.color,
                    opacity: .5
                });
                var r = {
                    point: new a.Point(o.x + 14,o.y + 3),
                    content: o.userFullname,
                    fillColor: "#AAA",
                    fontFamily: "Courier New",
                    fontWeight: "bold",
                    fontSize: 12,
                    justification: "left",
                    name: "cursor-text:" + t
                }
                  , n = new a.PointText(r)
                  , i = new a.Shape.Rectangle(new a.Rectangle(o.x + 10,n.bounds.y,n.bounds.width + 10,n.bounds.height));
                i.name = "cursor-text-background:" + t,
                i.fillColor = "#FFFFFF",
                i.strokeColor = o.color,
                i.strokeWidth = 1,
                i.insertBelow(n)
            }
        }
        )),
        i.globalSocketObj.on("clear:cursors:room:grabbed", (function(e) {
            if (e.length > 0)
                for (var t = 0; t < e.length; t++)
                    vt(e[t])
        }
        )),
        i.globalSocketObj.on("image:add", (function(e, t, o, r, n) {
            l.readonlyManager.resetLastUpdatedAt(),
            ve(!1, !1, !1),
            Ee(null, null, "zoom-out"),
            t != c.userState.uid && setTimeout((function() {
                var e = new a.Raster(o);
                e.onError = function(e) {
                    console.log("broken", e),
                    setTimeout((function() {
                        var e = new a.Raster(o);
                        e.onError = function(t) {
                            setTimeout((function() {
                                e.onError((function(t) {
                                    setTimeout((function() {
                                        e.onLoad = function() {
                                            var t = new a.Matrix(r[1],r[2],r[3],r[4],r[5],r[6]);
                                            e.name = n,
                                            e.crossOrigin = "anonymous",
                                            e.setMatrix(t),
                                            e.selected = !1,
                                            _.draw()
                                        }
                                    }
                                    ), 2e3)
                                }
                                )),
                                e.onLoad = function() {
                                    var t = new a.Matrix(r[1],r[2],r[3],r[4],r[5],r[6]);
                                    e.name = n,
                                    e.setMatrix(t),
                                    e.selected = !1,
                                    e.crossOrigin = "anonymous",
                                    _.draw()
                                }
                            }
                            ), 3e3)
                        }
                        ,
                        e.onLoad = function() {
                            var t = new a.Matrix(r[1],r[2],r[3],r[4],r[5],r[6]);
                            e.name = n,
                            e.setMatrix(t),
                            e.selected = !1,
                            e.crossOrigin = "anonymous",
                            _.draw()
                        }
                    }
                    ), 2e3)
                }
                ,
                e.onLoad = function() {
                    var t = new a.Matrix(r[1],r[2],r[3],r[4],r[5],r[6]);
                    e.name = n,
                    e.setMatrix(t),
                    e.selected = !1,
                    e.crossOrigin = "anonymous",
                    _.draw()
                }
            }
            ), 1e3)
        }
        ));
        var bt = {}
          , yt = function(e, t, o) {
            if (void 0 !== r().project.layers[t.page]) {
                r().activate();
                var n = null;
                void 0 !== o ? n = new a.Path({
                    segments: o,
                    closed: !1
                }) : (n = new a.Path,
                bt[e] = n);
                var i = new a.Color(t.rgba.red,t.rgba.green,t.rgba.blue,t.rgba.opacity);
                n.strokeColor = i,
                n.strokeWidth = t.strokeWidth,
                "draw" == t.tool && (n.opacity = .4),
                n.strokeCap = "butt",
                n.name = t.name,
                r().project.layers[t.page] && r().project.layers[t.page].addChild(n),
                n.simplify(),
                _.draw()
            }
        }
          , wt = function(e, t) {
            r().activate();
            var o = bt[e];
            if (o) {
                for (var n = 0; n < t.length; n++)
                    o.add(new a.Point(t[n][0],t[n][1]));
                o.smooth(),
                _.draw()
            }
        }
          , St = function(e, t) {
            r().project.layers[t.page] ? r().project.layers[t.page].children[t.name] ? (r().project.layers[t.page].children[t.name].remove(),
            _.draw()) : console.log("endExternalPath: Path Not Found!") : console.log("endExternalPath: Layer Not Found!"),
            bt[e] = !1,
            yt(e, t, t.path)
        }
          , jt = function(e, t) {
            var o = "page-".concat(e);
            if (t = JSON.parse(t),
            r().project.layers[o].children[t.name] && r().project.layers[o].children[t.name].remove(),
            r().project.layers[o]) {
                var n = new a.Path.Ellipse({
                    name: t.name,
                    center: new a.Point(t.center[1],t.center[2]),
                    radius: new a.Point(t.radius[1],t.radius[2]),
                    strokeColor: t.strokeColor,
                    strokeWidth: 2,
                    opacity: 1
                });
                r().project.layers[o].addChild(n),
                _.draw()
            }
        }
          , $t = function(e, t) {
            var o = "page-".concat(e);
            if (t = JSON.parse(t),
            r().project.layers[o].children[t.name] && r().project.layers[o].children[t.name].remove(),
            r().project.layers[o]) {
                var n = new a.Path.Rectangle({
                    name: t.name,
                    topLeft: new a.Point(t.topLeft[1],t.topLeft[2]),
                    bottomRight: new a.Point(t.bottomRight[1],t.bottomRight[2]),
                    strokeColor: t.strokeColor,
                    strokeWidth: 2,
                    opacity: 1
                });
                r().project.layers[o].addChild(n),
                _.draw()
            }
        }
          , kt = function(e, t) {
            var o = "page-".concat(e);
            if ("string" == typeof t && (t = JSON.parse(t)),
            r().project.layers[o] && r().project.layers[o].children["arrow:" + t.name] && r().project.layers[o].children["arrow:" + t.name].remove(),
            r().project.layers[o]) {
                var n = new a.Path.Line({
                    name: "arrow-line:" + t.name,
                    from: new a.Point(t.from[1],t.from[2]),
                    to: new a.Point(t.to[1],t.to[2]),
                    strokeColor: t.strokeColor,
                    strokeWidth: 2
                })
                  , i = new a.Point(t.to[1],t.to[2])
                  , s = i.subtract(new a.Point(t.from[1],t.from[2]))
                  , c = s.normalize(18)
                  , l = s.normalize(4).add(i)
                  , d = new a.Path({
                    name: "arrow-head:" + t.name,
                    segments: [l.add(c.rotate(155)), l, l.add(c.rotate(-155))],
                    fillColor: t.strokeColor,
                    strokeWidth: 2
                })
                  , u = new a.Group({
                    name: "arrow:" + t.name,
                    children: [n, d]
                });
                r().project.layers[o].addChild(u),
                _.draw()
            }
        };
        function Ot(e, t) {
            c.canvasState.noWrapperView ? ($("#status-text").text(e),
            $("#progress-bar").css({
                width: t + "%"
            }),
            $("#progress-percent").text(t + "%"),
            $("#progress-dialog").modal("show")) : window.parent && window.parent.postMessage({
                action: "show-progress",
                statusText: e,
                percentFinished: t
            }, "*")
        }
        new function(e) {
            var t, o, r = this, n = (document.getElementById(e),
            !1);
            document.addEventListener("keydown", (function(e) {
                r.on_keyboard_action(e)
            }
            ), !1),
            document.addEventListener("keyup", (function(e) {
                r.on_keyboardup_action(e)
            }
            ), !1),
            document.addEventListener("paste", (function(e) {
                r.paste_auto(e)
            }
            ), !1),
            this.init = function() {
                if (window.Clipboard)
                    return !0;
                (t = document.createElement("div")).setAttribute("id", "paste_ff"),
                t.setAttribute("contenteditable", ""),
                t.style.cssText = "opacity:0;position:fixed;top:0px;left:0px;",
                t.style.marginLeft = "-20px",
                t.style.width = "10px",
                document.body.appendChild(t),
                document.getElementById("paste_ff").addEventListener("DOMSubtreeModified", (function() {
                    if ("auto" == o || 0 == n)
                        return !0;
                    1 == t.children.length && null != t.firstElementChild.src && r.paste_createImage(t.firstElementChild.src),
                    setTimeout((function() {
                        t.innerHTML = ""
                    }
                    ), 20)
                }
                ), !1)
            }(),
            this.paste_auto = function(e) {
                if (o = "",
                void 0 === window.Clipboard && (t.innerHTML = ""),
                e.clipboardData) {
                    var a = e.clipboardData.items;
                    if (a) {
                        o = "auto";
                        for (var r = 0; r < a.length; r++)
                            if (-1 !== a[r].type.indexOf("image")) {
                                var n = a[r].getAsFile()
                                  , i = (window.URL || window.webkitURL).createObjectURL(n);
                                this.paste_createImage(i)
                            }
                        e.preventDefault()
                    }
                }
            }
            ,
            this.on_keyboard_action = function(e) {
                var o = e.keyCode;
                if ((17 == o || e.metaKey || e.ctrlKey) && 0 == n && (n = !0),
                86 == o) {
                    if (null != document.activeElement && "text" == document.activeElement.type)
                        return !1;
                    1 != n || window.Clipboard || t.focus()
                }
            }
            ,
            this.on_keyboardup_action = function(e) {
                (17 == e.keyCode || e.metaKey || e.ctrlKey || "Meta" == e.key) && (n = !1)
            }
            ,
            this.paste_createImage = function(e) {
                var t = new Image;
                t.src = e,
                c.canvasState.incrementProjectObjectCount();
                var o = new a.Raster(t);
                o.position = _.center,
                o.name = "image:" + c.userState.uid + ":" + c.canvasState.projectObjectCount,
                o.type = "paste",
                o.onLoad = rt
            }
        }
        ("the-canvas");
        window.addEventListener("beforeunload", (function(e) {
            he()
        }
        ))
    },
    6539: function(e, t) {
        var o, a, r;
        o = navigator.userAgent,
        a = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }(o),
        r = {},
        a.browser && (r[a.browser] = !0,
        r.version = a.version),
        r.chrome ? r.webkit = !0 : r.webkit && (r.safari = !0),
        r.windows = /windows/i.test(o),
        r.mobile = /mobile/i.test(o) || /android/i.test(o),
        t.browser = r
    },
    2520: function(e, t, o) {
        "use strict";
        t.Z = o.p + "fonts/cour-b268ee1f363aa28dcfc43f5a03046ad9.ttf"
    },
    9844: function(e, t, o) {
        "use strict";
        t.Z = o.p + "fonts/courbd-f1538625f4f0bf97860cacdc2106f1f9.ttf"
    },
    3012: function(e, t, o) {
        "use strict";
        t.Z = o.p + "fonts/courbi-c72d5e4043fad2635cc5a1d421ea05ca.ttf"
    },
    6884: function(e, t, o) {
        "use strict";
        t.Z = o.p + "fonts/couri-9f555dba0c8bc55ec47cf6d5856faa62.ttf"
    },
    6992: function() {},
    9249: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.hideAlertBar = t.showAlertBar = t.unpopulateAlertBar = t.populateAlertBarDynamic = t.populateAlertBarAdminClose = t.populateAlertBarLostConnection = t.populateAlertBarAsync = void 0;
        function o(e) {
            $(".alert-header").text(""),
            $(".alert-body").text("")
        }
        t.populateAlertBarAsync = function() {
            $(".alert-header").text("You have entered Freeform Edit"),
            $(".alert-body").text("You can freely change pages without affecting anyone else")
        }
        ,
        t.populateAlertBarLostConnection = function() {
            $(".alert-header").text("Lost connection to the Whiteboard Server!"),
            $(".alert-body").text("Please Refresh")
        }
        ,
        t.populateAlertBarAdminClose = function() {
            $(".alert-header").text("Your session has been closed by an Admin"),
            $(".alert-body").text("Your work has been saved")
        }
        ,
        t.populateAlertBarDynamic = function(e, t) {
            $(".alert-header").text(e),
            $(".alert-body").text(t)
        }
        ,
        t.unpopulateAlertBar = o,
        t.showAlertBar = function(e) {
            $(".alert-holder").fadeIn(500),
            $(".alert-holder").css("display", "block"),
            !0 !== e && setTimeout((()=>{
                $(".alert-holder").fadeOut(500),
                $(".alert-holder").css("display", "none"),
                o()
            }
            ), 3e3)
        }
        ,
        t.hideAlertBar = function() {
            $(".alert-holder").fadeOut(500)
        }
    },
    932: function(e, t, o) {
        "use strict";
        t.vs = t.L8 = t.VG = t.yX = t.ft = t.uq = t.iH = t.q6 = t.Rk = t.j_ = t.qr = void 0;
        const a = o(6704);
        function r() {
            $("#tool-hints").fadeOut(500),
            $("#tool-hints-modal").show(500),
            $("#tool-hints-modal").css("display", "flex")
        }
        function n() {
            if (a.canvasState.noWrapperView) {
                $("#progress-dialog").modal("hide")
            } else
                window.parent && window.parent.postMessage({
                    action: "hide-progress"
                }, "*")
        }
        t.qr = {
            primaryColor: "#61b7d5",
            secondaryColor: "rgba(97, 183, 213, .3)",
            tertiaryColor: "rgba(97, 183, 213, .1)"
        },
        t.j_ = {
            primaryColor: "#FF8C00",
            secondaryColor: "rgba(255, 140, 0, .3)",
            tertiaryColor: "rgba(255, 140, 0, .1)"
        },
        t.Rk = function() {
            $("#draw-container").css("background-color", "#f1f3f6")
        }
        ,
        t.q6 = function() {
            $("#thumbnail-scroller").css("visibility", "visible"),
            $("#draw-container").css("border", "1px solid #ccc"),
            $("#tool-hints-modal").css("display", "flex"),
            $("#undo").prop("disabled", !1)
        }
        ,
        t.iH = function() {
            $("#filler").remove()
        }
        ,
        t.uq = function(e) {
            $("#draw-container").show(),
            $(".export-image-li").css({
                display: "flex"
            }),
            e || $(".async").parent().remove()
        }
        ,
        t.ft = function(e) {
            document.documentElement.style.setProperty("--primary-color", e),
            "class" == e ? function() {
                const e = document.documentElement;
                e.style.setProperty("--primary-color", t.qr.primaryColor),
                e.style.setProperty("--secondary-color", t.qr.secondaryColor),
                e.style.setProperty("--tertiary-color", t.qr.tertiaryColor)
            }() : "cafe" == e && function() {
                const e = document.documentElement;
                e.style.setProperty("--primary-color", t.j_.primaryColor),
                e.style.setProperty("--secondary-color", t.j_.secondaryColor),
                e.style.setProperty("--tertiary-color", t.j_.tertiaryColor)
            }()
        }
        ,
        t.yX = function(e) {
            e || (localStorage.setItem("tool-hint-shown", "true"),
            $("#tool-hints-modal").fadeOut(),
            $("#tool-hints").fadeIn(),
            $("#tool-hints").css("display", "flex"),
            setTimeout(r, 5e3))
        }
        ,
        t.VG = n;
        t.L8 = ()=>{
            $("#canvas-container").hide(),
            $("#loading").show(),
            $(".shade").show()
        }
        ;
        t.vs = ()=>{
        	window.pageLoaded = true;
            $("#canvas-container").show(),
            $("#loading").hide(),
            $(".shade").hide(),
            n()
        }
    },
    6074: function(e, t, o) {
        "use strict";
        var a = this && this.__createBinding || (Object.create ? function(e, t, o, a) {
            void 0 === a && (a = o),
            Object.defineProperty(e, a, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, a) {
            void 0 === a && (a = o),
            e[a] = t[o]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , n = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && a(t, e, o);
            return r(t, e),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.handleCancelPress = t.handleOkayPress = t.showConfirmationPopup = t.unpopulateConfirmationText = t.populatePassPresenterText = t.populateClearCanvasConfirmationText = t.populateAsyncExitConfirmationText = t.userId = t.userFullname = t.passPresenterBody = t.passPresenterTitle = t.clearCanvasBody = t.clearCanvasHeader = t.exitAsyncBody = t.exitAsyncHeader = void 0;
        const i = o(6704)
          , s = n(o(9249));
        function c() {
            $("#confirmation-title").text(""),
            $("#confirmation-body").text("")
        }
        t.exitAsyncHeader = "Stop Freeform Edit?",
        t.exitAsyncBody = "When you stop you will be taken to the page that the other group members are working on",
        t.clearCanvasHeader = "Clear Canvas?",
        t.clearCanvasBody = "This action is irreversable. Are you sure you want to clear this whiteboard page for everyone?",
        t.passPresenterTitle = "Pass presenter mode?",
        t.passPresenterBody = "Are you sure you want to pass off presenter mode to ",
        t.userFullname = null,
        t.userId = null,
        t.populateAsyncExitConfirmationText = function() {
            $("#confirmation-title").text(t.exitAsyncHeader),
            $("#confirmation-body").text(t.exitAsyncBody)
        }
        ,
        t.populateClearCanvasConfirmationText = function() {
            $("#confirmation-title").text(t.clearCanvasHeader),
            $("#confirmation-body").text(t.clearCanvasBody)
        }
        ,
        t.populatePassPresenterText = function(e, o) {
            $("#confirmation-title").text(t.passPresenterTitle),
            $("#confirmation-body").text(t.passPresenterBody + e),
            t.userFullname = e,
            t.userId = o
        }
        ,
        t.unpopulateConfirmationText = c,
        t.showConfirmationPopup = function() {
            $("#confirmation-shade").css("display", "flex")
        }
        ,
        t.handleOkayPress = function() {
            if ($("#confirmation-title").text() === t.exitAsyncHeader) {
                if (i.canvasState.isAsync = !i.canvasState.isAsync,
                $(".async").css("color", "#353333"),
                s.unpopulateAlertBar(),
                $("#confirmation-shade").css("display", "none"),
                c(),
                null !== i.canvasState.asyncPageNum)
                    return {
                        type: "async",
                        asyncPageNum: i.canvasState.asyncPageNum
                    }
            } else {
                if ($("#confirmation-title").text() === t.clearCanvasHeader)
                    return $("#confirmation-shade").css("display", "none"),
                    c(),
                    {
                        type: "clear"
                    };
                if ($("#confirmation-title").text() === t.passPresenterTitle) {
                    $("#confirmation-shade").css("display", "none"),
                    c();
                    const e = {
                        type: "pass-presenter",
                        userFullname: t.userFullname,
                        userId: t.userId
                    };
                    return t.userFullname = null,
                    t.userId = null,
                    e
                }
            }
            return null
        }
        ,
        t.handleCancelPress = function() {
            $("#confirmation-shade").css("display", "none")
        }
    },
    9444: function(e, t, o) {
        "use strict";
        var a = this && this.__createBinding || (Object.create ? function(e, t, o, a) {
            void 0 === a && (a = o),
            Object.defineProperty(e, a, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, a) {
            void 0 === a && (a = o),
            e[a] = t[o]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , n = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && a(t, e, o);
            return r(t, e),
            t
        }
          , i = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.handlePresenterGesture = t.handlePresenterChange = t.changeLockColorToInactive = t.handlePresenterAssign = t.handlePresenterMenuDisplay = t.addP = t.removePDuplicates = t.removeP = t.attachOnclickToPresentee = t.handlePAppend = t.determinePAddon = t.updatePList = t.hidePresenterMenu = t.showPresenterMenu = t.togglePresenterList = t.noAudienceDuringPresentation = t.presenterTimer = t.pList = t.pListOpen = void 0;
        const s = i(o(3267))
          , c = o(3267)
          , l = o(6704)
          , d = n(o(6074))
          , u = o(2496);
        function p() {
            $("#presenter-holder").show()
        }
        function g() {
            $("#presenter-holder").hide()
        }
        t.pListOpen = !1,
        t.pList = [],
        t.noAudienceDuringPresentation = '<div class="presentee-holder"><i class="fas fa-user-times presenter-icon"></i><div class="presentee-name">No one is here 🙁</div></div>',
        t.togglePresenterList = function() {
            !0 === t.pListOpen ? ($("#presenter-list-holder").css("display", "none"),
            t.pListOpen = !1) : ($("#presenter-list-holder").css("display", "flex"),
            t.pListOpen = !0)
        }
        ,
        t.showPresenterMenu = p,
        t.hidePresenterMenu = g,
        t.updatePList = function(e) {
            h(e),
            $("#presenter-list-holder").empty(),
            t.pList.length > 0 ? t.pList.forEach((e=>{
                m(e)
            }
            )) : $("#presenter-list-holder").append(t.noAudienceDuringPresentation)
        }
        ;
        const h = e=>{
            t.pList.splice(0, t.pList.length, ...b(e))
        }
        ;
        function f(e) {
            return ""
        }
        function m(e) {
            if (e && e.userFullname && !0 !== l.canvasState.readonlyView) {
                var t = "audience-" + e.id;
                $(`.${t}`).remove(),
                $("#presenter-list-holder").append('<div class="presentee-holder ' + t + '"><i class="fas fa-user fa-1x presenter-icon""></i><div class="presentee-name">' + e.userFullname + (e.userFullname,
                "</div></div>")),
                v(t = "." + t, e)
            }
        }
        function v(e, t) {
            $(e).click((()=>{
                d.populatePassPresenterText(t.userFullname, t.id),
                d.showConfirmationPopup()
            }
            ))
        }
        function b(e) {
            return Array.from(new Set(e.map((e=>e.id)))).map((t=>e.find((e=>e.id === t))))
        }
        t.determinePAddon = f,
        t.handlePAppend = m,
        t.attachOnclickToPresentee = v,
        t.removeP = function(e) {
            h(t.pList.filter((t=>t.userFullname != e.userFullname))),
            $("#presenter-list-holder").empty(),
            t.pList.length > 0 && t.pList.forEach((t=>{
                t !== e && m(t)
            }
            )),
            y()
        }
        ,
        t.removePDuplicates = b,
        t.addP = function(e) {
            if (0 === t.pList.filter((t=>{
                t.userFullname,
                e.userFullname
            }
            )).length) {
                const o = [...t.pList, e];
                t.pList = b(o),
                $("#presenter-list-holder").children()[0] && $("#presenter-list-holder").children()[0].innerText.toLowerCase().includes("no one is here") && $("#presenter-list-holder").children()[0].remove(),
                m(e)
            }
            y()
        }
        ;
        function y() {
            Boolean(l.userState.userIsPresenter && l.canvasState.activePresentation) ? (p(),
            Boolean($("#presenter-list-holder").children().length) || $("#presenter-list-holder").append(t.noAudienceDuringPresentation)) : g()
        }
        t.handlePresenterMenuDisplay = y,
        t.handlePresenterAssign = function() {
            C(),
            O(),
            w(),
            j("You were assigned to present"),
            k(),
            y()
        }
        ;
        const w = ()=>{
            $(".toggle-whiteboard-lock").css("color", "#04e644")
        }
        ;
        t.changeLockColorToInactive = ()=>{
            $(".toggle-whiteboard-lock").css("color", "#61b7d5")
        }
        ;
        var S;
        !function(e) {
            e.ThisUserIsPresenting = "ThisUserIsPresenting",
            e.AnotherUserIsPresenting = "AnotherUserIsPresenting",
            e.PresentationEndedByCurrentUser = "PresentationEndedByCurrentUser",
            e.PresentationEndedByAnotherUser = "PresentationEndedByAnotherUser",
            e.NoOneIsPresenting = "NoOneIsPresenting"
        }(S || (S = {}));
        const j = e=>{
            $("#current-presenter-textbox").text(e)
        }
          , k = ()=>{
            t.presenterTimer = setTimeout((()=>{
                $("#current-presenter-holder").fadeOut()
            }
            ), 2e3)
        }
          , O = ()=>{
            $("#current-presenter-holder").fadeIn()
        }
          , C = ()=>{
            t.presenterTimer && clearTimeout(t.presenterTimer)
        }
        ;
        t.handlePresenterChange = function(e, o, a) {
            C();
            const [r,n] = (({someoneIsPresenting: e, lockedByThisUser: t, currentPresenter: o})=>e ? ((e,t)=>!0 === e && t)(e, t) ? ["You are presenting", S.ThisUserIsPresenting] : [`${o} is presenting`, S.AnotherUserIsPresenting] : ((e,t)=>!0 === e && t)(e, t) ? ["You ended your presentation", S.PresentationEndedByCurrentUser] : [`${o} stopped presenting`, S.PresentationEndedByAnotherUser])({
                someoneIsPresenting: e,
                lockedByThisUser: a,
                currentPresenter: o
            });
            switch (j(r),
            O(),
            n) {
            case S.AnotherUserIsPresenting:
                l.canvasState.setActivePresentation(!0);
                break;
            case S.ThisUserIsPresenting:
                l.canvasState.setActivePresentation(!0),
                l.userState.setUserIsPresenter(!0),
                w();
                break;
            case S.PresentationEndedByCurrentUser:
            case S.PresentationEndedByAnotherUser:
                g(),
                t.changeLockColorToInactive();
                break;
            default:
                console.error("Failure in PresentationStateOptions")
            }
            k(),
            y()
        }
        ,
        t.handlePresenterGesture = function(e, t, o) {
            if (e) {
                var a = new c.Point(e[1],e[2]);
                s.default.project.view.center = a,
                t && (s.default.project.view.zoom = t * o)
            }
            l.canvasState.toolsDropDownOpen && u.closeToolbarDropdown()
        }
    },
    3554: function(e, t) {
        "use strict";
        t.LM = t.oQ = t.NM = t.Dm = t.O$ = t.dm = t.b0 = void 0;
        t.b0 = ()=>{
            $("#thumbnail-scroller").css("visibility", "visible")
        }
        ;
        t.dm = ()=>{
            $("#thumbnail-scroller").show()
        }
        ;
        t.O$ = ()=>$("#thumbnail-scroller").outerHeight();
        t.Dm = ()=>$("#thumbnail-scroller").children().length;
        t.NM = ()=>{
            $("#thumbnail-scroller").css("height", "50px"),
            $("#thumbnail-scroller").css("width", "100%")
        }
        ;
        t.oQ = e=>{
            $("#thumbnail-scroller").append(e)
        }
        ;
        t.LM = ()=>{
            $("#thumbnail-scroller").children().remove()
        }
    },
    6928: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.readonlyManager = void 0;
        t.readonlyManager = new class {
            constructor() {
                this.lastUpdatedAt = (new Date).getTime()
            }
            setLastUpdatedAt(e) {
                this.lastUpdatedAt = e
            }
            resetLastUpdatedAt() {
                this.lastUpdatedAt = (new Date).getTime()
            }
            startUiUpdateInterval() {
                setInterval((()=>{
                    this.updateTimeUI()
                }
                ), 1e3)
            }
            attachMouseoverFunctionsToDOM() {
                const e = this;
                $("#filler").mouseover((function() {
                    $(this).data("show-tooltip", !0),
                    e.updateTimeUI()
                }
                )),
                $("#filler").mouseout((function() {
                    $(this).data("show-tooltip", !1),
                    e.updateTimeUI()
                }
                ))
            }
            removeUnneededUi() {
                $(".draw-tool-li").remove(),
                $("#read-only-toolbar").remove(),
                $("#editbar").remove(),
                $("#more-li").remove(),
                $("#overflow-bottom-layer").remove(),
                $("#thumbnail-loading-message").remove(),
                $("#tool-hints-modal").remove(),
                $("#presentees-holder").remove(),
                $("#thumbnail-scroller").outerHeight(0)
            }
            getTimeInformation() {
                let e = ((new Date).getTime() - this.lastUpdatedAt) / 1e3;
                e %= 86400;
                let t = e / 3600;
                e %= 3600;
                let o = e / 60
                  , a = e % 60;
                return {
                    secondsSinceLastUpdate: e,
                    hours: this.formatNumberForDisplay(parseInt(t.toString())),
                    minutes: this.formatNumberForDisplay(parseInt(o.toString())),
                    seconds: this.formatNumberForDisplay(parseInt(a.toString()))
                }
            }
            formatNumberForDisplay(e) {
                let t = e.toString();
                return 1 === t.length ? `0${t}` : t
            }
            updateTimeUI() {
                const {secondsSinceLastUpdate: e, hours: t, minutes: o, seconds: a} = this.getTimeInformation();
                if (e > 15) {
                    if ($("#filler").data("show-tooltip")) {
                        let e = " seconds since last update";
                        0 == t && 0 == o ? $("#draw-last-update").text(a + e) : 0 == t ? $("#draw-last-update").text(o + " minutes " + a + e) : $("#draw-last-update").text(t + " hours " + o + " minutes " + a + e)
                    } else
                        $("#draw-last-update").text(t + ":" + o + ":" + a);
                    $("#draw-last-update").show()
                } else
                    $("#draw-last-update").hide()
            }
        }
    },
    2496: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.showSelectPageTool = t.handleWhiteboardLockProperties = t.shouldShowDownload = t.closeToolbarDropdown = t.alterUndoProp = t.selectCorrectPageInDropdown = t.updateSelectPageUi = t.handleSelectPageInit = t.handleDisplayCloseWBButton = t.handleLockTooltipPopupOnInit = void 0,
        t.handleLockTooltipPopupOnInit = function() {
            null == window.localStorage.getItem("lock-whiteboard-gotit") ? setTimeout((function() {
                $(".toggle-whiteboard-lock").tooltipster("open")
            }
            ), 1e3) : $("#tooltip-lock-button-header").hide()
        }
        ,
        t.handleDisplayCloseWBButton = function(e) {
            e || $(".close-whiteboard-li").show()
        }
        ,
        t.handleSelectPageInit = function(e, t, a) {
            $("#select-page").children()[e] || $("#select-page").append($("<option>", {
                value: Number(e),
                text: "Page " + (Number(e) + 1)
            })),
            o(!(!a && t)),
            $('#select-page option[value="' + e + '"]').prop("selected", !0)
        }
        ,
        t.updateSelectPageUi = function(e) {
            $('#select-page option[value="' + e + '"]').prop("selected", !0)
        }
        ;
        t.selectCorrectPageInDropdown = e=>{
            $('#select-page option[value="' + e + '"]').prop("selected", !0)
        }
        ;
        t.alterUndoProp = e=>{
            $("#undo").prop("enabled", e)
        }
        ;
        function o(e) {
            e ? $("#tool-select-page").show() : $("#tool-select-page").hide()
        }
        t.closeToolbarDropdown = ()=>{
            $("#overflow-toolbar").hide(),
            $(".button-tool").blur(),
            $("#more").css({
                color: "black"
            })
        }
        ,
        t.shouldShowDownload = function(e) {
            e ? ($("#upload-download-drastic-tools-max").css({
                display: "block"
            }),
            $("#upload-download-drastic-tools-min").css({
                display: "block"
            }),
            $(".export-pdf-li").css({
                display: "flex"
            })) : ($("#upload-download-drastic-tools-max").css({
                display: "none"
            }),
            $("#upload-download-drastic-tools-min").css({
                display: "none"
            }),
            $(".export-pdf-li").css({
                display: "none"
            }))
        }
        ,
        t.handleWhiteboardLockProperties = function(e, t) {
            e && ($(".toggle-whiteboard-lock-li").show(),
            t || ($(".toggle-whiteboard-lock").data("locked", !1),
            $(".toggle-whiteboard-lock i").removeClass("fa-lock"),
            $(".toggle-whiteboard-lock i").addClass("fas fa-unlock"),
            $(".toggle-whiteboard-lock").removeClass("whiteboard-locked"),
            $("#tooltip-lock-button-body").text("Lock this whiteboard so others can not edit")))
        }
        ,
        t.showSelectPageTool = o
    },
    7876: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SET_USER_IS_OWNER = t.SET_USER_IS_PRESENTER = t.SET_USER_IS_MODERATOR = t.SET_USER_FULLNAME = t.SET_SHOW_WHITEBOARD_CONTROLS = t.SET_TOOLS_DROPDOWN_OPEN = t.SET_ASPECT_RATIO = t.SET_READONLY_VIEW = t.SET_NO_WRAPPER_VIEW = t.SET_ACTIVE_COLOR_JSON = t.SET_ACTIVE_COLOR_RGB = t.SET_ACTIVE_PRESENTATION = t.SET_ACTIVE_SIGNING = t.SET_IS_LOADING_THUMBNAILS = t.SET_CURRENT_PDF_UPLOAD = t.SET_SIGNATURE_FIELD_COUNT = t.INCREMENT_PROJECT_OBJECT_COUNT = t.SET_PROJECT_OBJECT_COUNT = void 0,
        //! CanvasState
        t.SET_PROJECT_OBJECT_COUNT = "SET_PROJECT_OBJECT_COUNT",
        t.INCREMENT_PROJECT_OBJECT_COUNT = "INCREMENT_PROJECT_OBJECT_COUNT",
        t.SET_SIGNATURE_FIELD_COUNT = "SET_SIGNATURE_FIELD_COUNT",
        t.SET_CURRENT_PDF_UPLOAD = "SET_CURRENT_PDF_UPLOAD",
        t.SET_IS_LOADING_THUMBNAILS = "SET_IS_LOADING_THUMBNAILS",
        t.SET_ACTIVE_SIGNING = "SET_ACTIVE_SIGNING",
        t.SET_ACTIVE_PRESENTATION = "SET_ACTIVE_PRESENTATION",
        t.SET_ACTIVE_COLOR_RGB = "SET_ACTIVE_COLOR_RGB",
        t.SET_ACTIVE_COLOR_JSON = "SET_ACTIVE_COLOR_JSON",
        t.SET_NO_WRAPPER_VIEW = "SET_NO_WRAPPER_VIEW",
        t.SET_READONLY_VIEW = "SET_READONLY_VIEW",
        t.SET_ASPECT_RATIO = "SET_ASPECT_RATIO",
        t.SET_TOOLS_DROPDOWN_OPEN = "SET_TOOLS_DROPDOWN_OPEN",
        //! UserState
        t.SET_SHOW_WHITEBOARD_CONTROLS = "SET_SHOW_WHITEBOARD_CONTROLS",
        t.SET_USER_FULLNAME = "SET_USER_FULLNAME",
        t.SET_USER_IS_MODERATOR = "SET_USER_IS_MODERATOR",
        t.SET_USER_IS_PRESENTER = "SET_USER_IS_PRESENTER",
        t.SET_USER_IS_OWNER = "SET_USER_IS_OWNER"
    },
    3128: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.createTempBackgroundForExport = t.generateJspdfPageJSON = t.removeTempWhiteBackground = t.getPageAsSVG = t.setProjectSvg = t.setPageSvgArray = t.initializeJspdfFonts = void 0;
        const r = a(o(6727))
          , n = a(o(3267))
          , i = o(3267)
          , s = o(8449);
        let c = null
          , l = null;
        const d = n.default.view;
        function u() {
            return n.default.project.exportSVG()
        }
        function p(e) {
            const t = l.getElementById(`page-${e}`).outerHTML.replace('visibility="hidden"', "");
            return `${c[0]}>${c[1]}>${t}</g></svg>`
        }
        t.initializeJspdfFonts = function() {
            r.default.fonts = {
                CourierNew: {
                    normal: new URL(o(2520).Z,document.baseURI).href,
                    bold: new URL(o(9844).Z,document.baseURI).href,
                    italics: new URL(o(6884).Z,document.baseURI).href,
                    bolditalics: new URL(o(3012).Z,document.baseURI).href
                }
            }
        }
        ,
        t.setPageSvgArray = function() {
            c = l.outerHTML.split(">")
        }
        ,
        t.setProjectSvg = function() {
            l = u()
        }
        ,
        t.getPageAsSVG = u,
        t.removeTempWhiteBackground = function() {
            return n.default.project.activeLayer.children["temp-background"].remove()
        }
        ,
        t.generateJspdfPageJSON = function(e, t, o) {
            return {
                pageBreak: s.jspdfDeterminePageBreak(e),
                margin: 0,
                pageSize: {
                    width: s.jspdfWidthDetermine(t),
                    height: s.jspdfHeightDetermine(t)
                },
                width: s.jspdfWidthDetermine(t),
                height: s.jspdfHeightDetermine(t),
                svg: p(e),
                pageOrientation: s.getPageOrientation(o)
            }
        }
        ,
        t.createTempBackgroundForExport = function() {
            new i.Shape.Rectangle({
                name: "temp-background",
                rectangle: d.bounds,
                fillColor: "#FFF"
            }).sendToBack()
        }
    },
    8659: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removeFocusCurrPageThumbnail = t.addFocusToThumbnail = t.shouldChangePage = t.createNewLayer = t.shouldOnlyLoadOnePage = t.pageInteractions = void 0;
        const r = a(o(3267))
          , n = o(4937)
          , i = o(6704);
        t.pageInteractions = new class {
            changePage(e, t, o, a) {
                $("#zoom-percentage-holder").fadeOut(),
                n.removeGridLines(),
                n.updateCanvasForText();
                for (var l = 0; l < r.default.project.layers.length; l++)
                    r.default.project.layers[l].visible = !1;
                if (void 0 === r.default.project.layers["page-" + e])
                    return console.error("undefined page!!"),
                    i.canvasState.setAspectRatio(i.staticGlobals.DefaultAspectRatio),
                    t ? n.onWindowResize(t, o, !1) : n.onWindowResize(!1, o, !1);
                r.default.project.layers["page-" + e].visible = !0,
                r.default.project.layers["page-" + e].bringToFront(),
                r.default.project.layers["page-" + e].activate(),
                c(),
                s(e),
                n.resetZoomLoop(a),
                void 0 === r.default.project.layers["page-" + e].data.aspectRatio ? i.canvasState.setAspectRatio(i.staticGlobals.DefaultAspectRatio) : i.canvasState.setAspectRatio(parseFloat(r.default.project.layers["page-" + e].data.aspectRatio)),
                t || n.centerPaperView(),
                n.repairCurrentPDFMatrices()
            }
        }
        ;
        t.shouldOnlyLoadOnePage = e=>!0 === i.canvasState.readonlyView && !0 !== e;
        t.createNewLayer = e=>new r.default.Layer({
            name: `page-${e}`
        });
        function s(e) {
            $(`#img-page-${e}`).addClass("active")
        }
        function c() {
            $("#thumbnail-scroller canvas").removeClass("active")
        }
        t.shouldChangePage = (e,t)=>e === i.userState.uid || !1 === t && !1 === i.canvasState.isAsync,
        t.addFocusToThumbnail = s,
        t.removeFocusCurrPageThumbnail = c
    },
    1857: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.centerIsPrevented = t.isCurrentPagePDFLoaded = t.isCurrentWhiteboardPagePDF = t.getFirstChildOfCurrentPage = void 0;
        const r = a(o(3267));
        t.getFirstChildOfCurrentPage = function() {
            var e, t;
            return null == (null === (t = null === (e = null === r.default || void 0 === r.default ? void 0 : r.default.project) || void 0 === e ? void 0 : e.activeLayer) || void 0 === t ? void 0 : t.children) ? null : r.default.project.activeLayer.children[0]
        }
        ,
        t.isCurrentWhiteboardPagePDF = function(e) {
            var t;
            return Boolean(null === (t = null == e ? void 0 : e.name) || void 0 === t ? void 0 : t.includes("pdf"))
        }
        ,
        t.isCurrentPagePDFLoaded = function(e) {
            return Boolean(null == e ? void 0 : e.loaded)
        }
        ,
        t.centerIsPrevented = function(e, t, o) {
            return !(!e || !t || o)
        }
    },
    990: function(e, t, o) {
        "use strict";
        const a = o(103)
          , r = o(6704);
        t.Z = class {
            static subscribe() {
                a.globalSocketObj.emit("subscribe", {
                    room: r.staticGlobals.room,
                    convertDoc: r.staticGlobals.convertDoc,
                    uid: r.userState.uid,
                    readOnly: !1
                })
            }
            static resubscribe() {
                a.globalSocketObj.emit("resubscribe", {
                    room: r.staticGlobals.room,
                    convertDoc: r.staticGlobals.convertDoc,
                    uid: r.userState.uid,
                    readOnly: !1
                })
            }
        }
    },
    103: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.globalSocketObj = void 0;
        const r = a(o(6809))
          , n = o(6704)
          , i = r.default.connect("/", {
            query: "auth=" + btoa(window.location.pathname + window.location.search) + "&token=" + n.staticGlobals.authToken
        });
        t.globalSocketObj = i
    },
    4722: function(e, t, o) {
        "use strict";
        var a = this && this.__createBinding || (Object.create ? function(e, t, o, a) {
            void 0 === a && (a = o),
            Object.defineProperty(e, a, {
                enumerable: !0,
                get: function() {
                    return t[o]
                }
            })
        }
        : function(e, t, o, a) {
            void 0 === a && (a = o),
            e[a] = t[o]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , n = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var o in e)
                    "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && a(t, e, o);
            return r(t, e),
            t
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const i = o(7876)
          , s = n(o(9249))
          , c = n(o(6074));
        t.default = class {
            constructor() {
                this.projectObjectCount = 0,
                this.mySignatureFieldCount = 0,
                this.currentPdfUpload = !1,
                this.loadingThumbnails = !1,
                this.activelySigning = !1,
                this.activePresentation = !1,
                this.isAsync = !1,
                this.asyncPageNum = null,
                this.activeColorRgb = "",
                this.activeColorJson = {},
                this.noWrapperView = !1,
                this.readonlyView = !1,
                this.aspectRatio = .707,
                this.toolsDropDownOpen = !1
            }
            setProjectObjectCount(e) {
                this.rootReducer({
                    type: i.SET_PROJECT_OBJECT_COUNT,
                    payload: e
                })
            }
            incrementProjectObjectCount() {
                this.rootReducer({
                    type: i.INCREMENT_PROJECT_OBJECT_COUNT,
                    payload: null
                })
            }
            setSignatureFieldCount(e) {
                this.rootReducer({
                    type: i.SET_SIGNATURE_FIELD_COUNT,
                    payload: e
                })
            }
            setCurrentPdfUpload(e) {
                this.rootReducer({
                    type: i.SET_CURRENT_PDF_UPLOAD,
                    payload: e
                })
            }
            setIsLoadingThumbnails(e) {
                this.rootReducer({
                    type: i.SET_IS_LOADING_THUMBNAILS,
                    payload: e
                })
            }
            setActiveSigning(e) {
                this.rootReducer({
                    type: i.SET_ACTIVE_SIGNING,
                    payload: e
                })
            }
            setActivePresentation(e) {
                this.rootReducer({
                    type: i.SET_ACTIVE_PRESENTATION,
                    payload: e
                })
            }
            toggleAsync(e) {
                if(this.isAsync)
                {
                	this.isAsync = false;
					$(".async").css("color", "#353333");
						null !== this.asyncPageNum && void 0 !== this.asyncPageNum && (o(8659).pageInteractions.changePage(this.asyncPageNum, !1, !1, !1, !1),
						o(2496).updateSelectPageUi(this.asyncPageNum));
                }
                else
                {
                	this.isAsync = true;
                	this.setAsyncPageNum(e),
                $(".async").css("color", "#04e644")
                }
            }
            setAsyncPageNum(e) {
                this.asyncPageNum = e
            }
            setActiveColorJson(e) {
                this.rootReducer({
                    type: i.SET_ACTIVE_COLOR_JSON,
                    payload: e
                })
            }
            setActiveColorRgb(e) {
                this.rootReducer({
                    type: i.SET_ACTIVE_COLOR_RGB,
                    payload: e
                })
            }
            setNoWrapperView(e) {
                this.rootReducer({
                    type: i.SET_NO_WRAPPER_VIEW,
                    payload: e
                })
            }
            setReadonlyView(e) {
                this.rootReducer({
                    type: i.SET_READONLY_VIEW,
                    payload: e
                })
            }
            setAspectRatio(e) {
                this.rootReducer({
                    type: i.SET_ASPECT_RATIO,
                    payload: e
                })
            }
            setToolsDropDownOpen(e) {
                this.rootReducer({
                    type: i.SET_TOOLS_DROPDOWN_OPEN,
                    payload: e
                })
            }
            rootReducer(e) {
                switch (e.type) {
                case i.SET_PROJECT_OBJECT_COUNT:
                    this.projectObjectCount = e.payload;
                    break;
                case i.INCREMENT_PROJECT_OBJECT_COUNT:
                    this.projectObjectCount += 1;
                    break;
                case i.SET_SIGNATURE_FIELD_COUNT:
                    this.mySignatureFieldCount = e.payload;
                    break;
                case i.SET_CURRENT_PDF_UPLOAD:
                    this.currentPdfUpload = e.payload;
                    break;
                case i.SET_IS_LOADING_THUMBNAILS:
                    this.loadingThumbnails = e.payload;
                    break;
                case i.SET_ACTIVE_SIGNING:
                    this.activelySigning = e.payload;
                    break;
                case i.SET_ACTIVE_PRESENTATION:
                    this.activePresentation = e.payload;
                    break;
                case i.SET_ACTIVE_COLOR_RGB:
                    this.activeColorRgb = e.payload;
                    break;
                case i.SET_ACTIVE_COLOR_JSON:
                    this.activeColorJson = e.payload;
                    break;
                case i.SET_NO_WRAPPER_VIEW:
                    this.noWrapperView = e.payload;
                    break;
                case i.SET_READONLY_VIEW:
                    this.readonlyView = e.payload;
                    break;
                case i.SET_ASPECT_RATIO:
                    this.aspectRatio = e.payload;
                    break;
                case i.SET_TOOLS_DROPDOWN_OPEN:
                    this.toolsDropDownOpen = e.payload;
                    break;
                default:
                    console.log("Uncaught action: ", e)
                }
            }
        }
    },
    7822: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = a(o(4669));
        t.default = class {
            constructor() {
                this.DefaultAspectRatio = .707,
                this.ZoomConstant = 500,
                this.CursorOffsetY = 1,
                this.xScale = 2.5,
                this.yScale = .8 * this.xScale,
                this.SOCKET_UPDATE_INTERVAL = 200,
                this.room = window.location.pathname.split("/")[2],
                this.isChrome = !!window.chrome,
                this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                this.convertDoc = r.default("f"),
                this.authToken = r.default("auth_token")
            }
        }
    },
    1812: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = a(o(4669))
          , n = o(7876);
        t.default = class {
            constructor() {
                this.showWhiteboardControls = !1,
                this.myFullName = "",
                this.userIsModerator = !1,
                this.uid = r.default("uid"),
                this.userIsPresenter = !1,
                this.userIsOwner = !1
            }
            setShowWhiteboardControls(e) {
                this.rootReducer({
                    type: n.SET_SHOW_WHITEBOARD_CONTROLS,
                    payload: e
                })
            }
            setUserFullname(e) {
                this.rootReducer({
                    type: n.SET_USER_FULLNAME,
                    payload: e
                })
            }
            setUserIsModerator(e) {
                this.rootReducer({
                    type: n.SET_USER_IS_MODERATOR,
                    payload: e
                })
            }
            setUserIsPresenter(e) {
                this.rootReducer({
                    type: n.SET_USER_IS_PRESENTER,
                    payload: e
                })
            }
            setUserIsOwner(e, t) {
                this.rootReducer({
                    type: n.SET_USER_IS_PRESENTER,
                    payload: e === t
                })
            }
            rootReducer(e) {
                switch (e.type) {
                case n.SET_SHOW_WHITEBOARD_CONTROLS:
                    this.showWhiteboardControls = e.payload;
                    break;
                case n.SET_USER_FULLNAME:
                    this.myFullName = e.payload;
                    break;
                case n.SET_USER_IS_MODERATOR:
                    this.userIsModerator = e.payload;
                    break;
                case n.SET_USER_IS_PRESENTER:
                    this.userIsPresenter = e.payload;
                    break;
                case n.SET_USER_IS_OWNER:
                    this.userIsOwner = e.payload;
                default:
                    console.log("Uncaught action: ", e)
                }
            }
        }
    },
    6704: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.canvasState = t.userState = t.staticGlobals = void 0;
        const r = a(o(7822))
          , n = a(o(1812))
          , i = a(o(4722));
        t.staticGlobals = new r.default,
        t.userState = new n.default,
        t.canvasState = new i.default
    },
    8622: function(e, t) {
        "use strict";
        class o {
            static encode(e) {
                let t, a, r, n, i, s, c, l = "", d = 0;
                for (e = o._utf8_encode(e); d < e.length; )
                    t = e.charCodeAt(d++),
                    a = e.charCodeAt(d++),
                    r = e.charCodeAt(d++),
                    n = t >> 2,
                    i = (3 & t) << 4 | a >> 4,
                    s = (15 & a) << 2 | r >> 6,
                    c = 63 & r,
                    isNaN(a) ? s = c = 64 : isNaN(r) && (c = 64),
                    l = l + this._keyStr.charAt(n) + this._keyStr.charAt(i) + this._keyStr.charAt(s) + this._keyStr.charAt(c);
                return l
            }
            static decode(e) {
                let t, a, r, n, i, s, c, l = "", d = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < e.length; )
                    n = this._keyStr.indexOf(e.charAt(d++)),
                    i = this._keyStr.indexOf(e.charAt(d++)),
                    s = this._keyStr.indexOf(e.charAt(d++)),
                    c = this._keyStr.indexOf(e.charAt(d++)),
                    t = n << 2 | i >> 4,
                    a = (15 & i) << 4 | s >> 2,
                    r = (3 & s) << 6 | c,
                    l += String.fromCharCode(t),
                    64 != s && (l += String.fromCharCode(a)),
                    64 != c && (l += String.fromCharCode(r));
                return l = o._utf8_decode(l),
                l
            }
            static _utf8_encode(e) {
                e = e.replace(/\r\n/g, "\n");
                let t = "";
                for (let o = 0; o < e.length; o++) {
                    let a = e.charCodeAt(o);
                    a < 128 ? t += String.fromCharCode(a) : a > 127 && a < 2048 ? (t += String.fromCharCode(a >> 6 | 192),
                    t += String.fromCharCode(63 & a | 128)) : (t += String.fromCharCode(a >> 12 | 224),
                    t += String.fromCharCode(a >> 6 & 63 | 128),
                    t += String.fromCharCode(63 & a | 128))
                }
                return t
            }
            static _utf8_decode(e) {
                let t = ""
                  , o = 0
                  , a = 0
                  , r = 0
                  , n = 0;
                for (; o < e.length; )
                    a = e.charCodeAt(o),
                    a < 128 ? (t += String.fromCharCode(a),
                    o++) : a > 191 && a < 224 ? (r = e.charCodeAt(o + 1),
                    t += String.fromCharCode((31 & a) << 6 | 63 & r),
                    o += 2) : (r = e.charCodeAt(o + 1),
                    n = e.charCodeAt(o + 2),
                    t += String.fromCharCode((15 & a) << 12 | (63 & r) << 6 | 63 & n),
                    o += 3);
                return t
            }
        }
        o._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    },
    5418: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = class {
            static printBuildInfo() {
                var e = new Date("2021-08-31T02:53:00.962Z");
                console.log(`Whiteboard Build Info:\n----\nGit Version: d93d663\nGit Commit Hash: d93d6631f277d5f512301518bca41160e5f23176\nGit Branch: release\nBuild Timestamp: ${e.toDateString()} ${e.toTimeString()}`)
            }
        }
    },
    8663: function(e, t) {
        "use strict";
        t.l = void 0;
        t.l = new class {
            convertUrlPropToBool(e) {
                return "1" === e || 1 === e
            }
        }
    },
    7728: function(e, t, o) {
        "use strict";
        t.XM = t.ji = t.an = void 0;
        const a = o(6704);
        t.an = function(e) {
            return e = (e = e.replace(/"crossOrigin":""/g, '"crossOrigin":"use-credentials"')).replace(/"crossOrigin":"anonymous"/g, '"crossOrigin":"use-credentials"')
        }
        ;
        const r = (e,t,o)=>{
            try {
                return e = "https://" + e,
                o.replace(e, t)
            } catch (e) {
                console.error("there was a broken image during injection")
            }
            return o
        }
        ;
        t.ji = function({pageNum: e, s3Urls: t, dbUrls: o, json: a}) {
            var n;
            let i = a;
            return null === (n = o[e]) || void 0 === n || n.forEach(((a,n)=>{
                o[e][n].length > 1 ? i = r(o[e][n], t[n], i) : console.error("there was a broken image during injection")
            }
            )),
            i
        }
        ,
        t.XM = function({s3Urls: e, dbUrls: t, json: o}) {
            let n = o;
            return e && t ? e.forEach(((o,a)=>{
                t[a] && t[a][0] && (t[a].length > 1 && "object" == typeof t[a] ? t[a].forEach(((o,i)=>{
                    n = r(t[a][i], e[a][i], n)
                }
                )) : n = r(t[a][0], e[a][0], n))
            }
            )) : a.canvasState.setIsLoadingThumbnails(!1),
            n
        }
    },
    8449: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.populateJspdfDoc = t.getPageOrientation = t.jspdfHeightDetermine = t.jspdfWidthDetermine = t.jspdfDeterminePageBreak = void 0,
        t.jspdfDeterminePageBreak = function(e) {
            return 0 == e ? "" : "before"
        }
        ,
        t.jspdfWidthDetermine = function(e) {
            return e.width
        }
        ,
        t.jspdfHeightDetermine = function(e) {
            return e.height
        }
        ,
        t.getPageOrientation = function(e) {
            return e > 1 ? "landscape" : "portrait"
        }
        ,
        t.populateJspdfDoc = function() {
            return {
                content: [],
                defaultStyle: {
                    font: "CourierNew"
                }
            }
        }
    },
    4007: function(e, t) {
        "use strict";
        t.v = void 0,
        t.v = function(e) {
            return (null == e ? void 0 : e.length) ? e : []
        }
    },
    4669: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null == t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }
    },
    2595: function(e, t, o) {
        "use strict";
        var a = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        const r = a(o(3267))
          , n = a(o(9479))
          , i = a(o(5418))
          , s = a(o(4669))
          , c = o(6704)
          , l = o(6928);
        i.default.printBuildInfo(),
        n.default((()=>{
            o(6539),
            o(7424),
            o(5911),
            o(9594)
        }
        )),
        c.canvasState.setNoWrapperView("1" == s.default("no_wrapper")),
        c.canvasState.setReadonlyView("1" == s.default("read_only")),
        !0 === c.canvasState.readonlyView && (l.readonlyManager.removeUnneededUi(),
        l.readonlyManager.startUiUpdateInterval(),
        l.readonlyManager.attachMouseoverFunctionsToDOM()),
        window.onload = ()=>{
            const e = document.getElementById("the-canvas");
            e ? (r.default.setup(e),
            o(2595),
            o(4937)) : console.error("Canvas is missing! Cannot start paper.")
        }
    },
    6316: function() {},
    2878: function() {},
    418: function() {}
}, 0, [[2595, 666, 796, 286, 298, 169, 156, 770, 765, 812, 476, 541, 983, 544, 138, 856, 584, 462, 293, 593, 149, 361, 874, 142, 389, 735, 781, 672], [6992, 666, 796, 286, 298, 169, 156, 770, 765, 812, 476, 541, 983, 544, 138, 856, 584, 462, 293, 593, 149, 361, 874, 142, 389, 735, 781, 672]]]);

};
window.wb = wb;
