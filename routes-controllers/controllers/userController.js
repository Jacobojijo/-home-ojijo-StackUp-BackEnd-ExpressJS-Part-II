
const get_user_profile_by_id = async(req,res) => {
    try {
        return res.staus(200).send({
            message: `get_user_profile_by_id ${req.params.user_id}` 
        });
    } catch (error) {
       return res.status(500).json({
        message: error.message
       });
    }
};

const update_user_profile_by_id = async(req,res) => {
    try {
        return res.status(200).send({
            message: `update_user_bt_profile_id ${user_id}`
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const test = async(req,res) => {
    try {
        return res.status(200).send({
            message: "test"
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    get_user_profile_by_id,
    update_user_profile_by_id,
    test,
}