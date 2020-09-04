
const signup = async (req, res) => {
    const { contactName, contactEmail} = req.body;
    if (!contactName || !contactEmail) {
        res.redirect('/contact-fail');
        return;
    }
    //send to mailchimp list

            console.log(req.body);
        const firstName = contactName.split(" ")[0]  
        res.redirect('/contact-success');
        res.json({
            firstName: firstName
        })

    // res.redirect('/contact-success');
}


module.exports = {
    signup
}