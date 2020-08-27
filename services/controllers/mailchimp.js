

const signup = async (req, res) => {
    const { contactName, contactEmail} = req.body;
    if (!contactName || !contactEmail) {
        res.redirect('/contact-fail');
        return;
    }
    //send to mailchimp list

    res.redirect('/contact-success');
}


module.exports = {
    signup
}