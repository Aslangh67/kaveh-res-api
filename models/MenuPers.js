module.exports = function(sequelize, DataTypes) {
    let MenuPers = sequelize.define('MenuPers', {
        // add properites here
         name: DataTypes.STRING,
         price:DataTypes.DECIMAL(2),
         description:DataTypes.STRING,
         category:DataTypes.STRING
    });

    return MenuPers;
};