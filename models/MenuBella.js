module.exports = function(sequelize, DataTypes) {
    let Menu_bella = sequelize.define('Menu_bella', {
         name: DataTypes.STRING,
         price:DataTypes.DECIMAL(2),
         description:DataTypes.STRING,
         category:DataTypes.STRING
    });

    return Menu_bella;
};