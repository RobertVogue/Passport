const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { sequelize } = require("./db/models");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const { restoreUser, requireAuth } = require("./auth");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const homeRouter = require("./routes/home");
const createStamps = require("./routes/stamps-create");
const queryHandlerRouter = require("./routes/queryHandler");
const profileRouter = require("./routes/profile");
const { secret } = require("./config");
const teamRouter = require("./routes/team");


const app = express();

// view engine setup
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
  session({
    secret,
    store,
    saveUninitialized: false,
    store,
    resave: false,
  })
);

// create Session table if it doesn't already exist
store.sync();

app.use(restoreUser);
app.use("/", indexRouter);
app.use("/team", teamRouter);
app.use("/handler", queryHandlerRouter);
app.use("/users", usersRouter);
app.use(requireAuth);
app.use("/stamps", createStamps);
app.use("/users", profileRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
