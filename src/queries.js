module.exports = {
  createPhoneBill: (username) =>
    `INSERT INTO User(id,username) values (Null,${username})`,
};
