function frmDisp(event) 
{
    if (event.keyCode == 13) 
    {
        document.getElementById("submit").style.display = "block";
        document.getElementById("volunteerForm").innerHTML = '';
        for (i = 0; i < document.getElementById("recipientNum").value; i++)
        {
            document.getElementById("volunteerForm").innerHTML += '<br /><div>Volunteer Number ' + (i + 1) + '</div>' + '<label for="recipientName">Recipient name:</label>' + '<input type="text" name="recipientName" placeholder="Enter your Recipient Name" required/>' + '<label for="organizationName">Organization name:' + '</label>' + '<input type="text" name="organizationName" placeholder="Enter your Organization Name" required/>' + '<label for="eventDate">Event Date:' + '</label>' + '<input type="text" name="eventDate" placeholder="Enter your Event Date" required/>' + '<label for="websiteURL">URL:' + '</label>' + '<input type="text" name="websiteURL" placeholder="Enter your Website URL"  equired/>' + '<label for="hostName">Host name:' + '</label>' + '<input type="text" name="hostName" placeholder="Host Name" required/><br />';
        }
    }
}
function array() 
{
    document.getElementById("volunteerInvitation").innerHTML = "";
    var volunteerList = [];
    for (i = 0; i < document.getElementById("recipientNum").value; i++)
    {
        volunteerList[i] =
        {
            recipientName: document.getElementsByName("recipientName")[i].value,
            organizationName: document.getElementsByName("organizationName")[i].value,
            eventDate: document.getElementsByName("eventDate")[i].value,
            websiteURL: document.getElementsByName("websiteURL")[i].value,
            hostName: document.getElementsByName("hostName")[i].value
        }
        document.getElementById("volunteerInvitation").innerHTML += '<article id="placeholderContent">Hello ' + volunteerList[i].recipientName + '!' + '<br/>' + '<br/> You have been invited to volunteer for an event held by ' + volunteerList[i].organizationName + '</span> on ' + '<span  id="eventDate">' + volunteerList[i].eventDate + '</span> Please respond to this website: ' + '<span id="websiteURL">' + volunteerList[i].websiteURL + '</span> to sign up as a volunteer.' + '<br/>' + '<br/> Thanks!' + '<br/>' + '<br/>' + '<span id="hostName">' + volunteerList[i].hostName + '</span>' + '</article> <br/><br/><br/>';
    }
    console.log(volunteerList);
    return false;
}