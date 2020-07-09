import React from "react";

class Oops extends React.Component {
  state = {
    shadow: { x: 0, y: 0 },
  };

  setShadow = (e) => {
    const shadow = {
      x: (window.innerWidth / 2 - e.x) / 120 + (Math.random() - 0.5),
      y: (window.innerHeight / 2 - e.y) / 120 + (Math.random() - 0.5),
    };

    this.setState({ shadow });
  };

  componentDidMount() {
    document.addEventListener("mousemove", this.setShadow);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.setShadow);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1
              className="glitch-text"
              style={{
                textShadow: `
                ${this.state.shadow.x}px ${
                  this.state.shadow.y
                }px rgba(225,0,0,0.8),
                ${-this.state.shadow.x}px ${-this.state.shadow
                  .y}px rgba(0,0,225,0.8)
                `,
              }}
            >
              OOPS!
            </h1>
            <p
              style={{
                textShadow: `
              ${this.state.shadow.x}px ${-this.state.shadow
                  .y}px rgba(0,225,0,0.9),
              ${-this.state.shadow.x}px ${
                  this.state.shadow.y
                }px rgba(225,225,0,0.9)
              `,
              }}
            >
              Something went wrong!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <p
              style={{
                textShadow: `
            ${-this.state.shadow.x}px ${-this.state.shadow
                  .y}px rgba(0,225,0,0.9),
            ${this.state.shadow.x}px ${
                  this.state.shadow.y
                }px rgba(225,225,0,0.9)
            `,
              }}
            >
              If you're seeing this message it means either you did something
              you shouldn't, or there is a bug that will probably be fixed in
              the future. Thank you for not freaking out.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p
              style={{
                textShadow: `
              ${this.state.shadow.x}px ${
                  this.state.shadow.y
                }px rgba(225,0,0,0.8),
              ${-this.state.shadow.x}px ${-this.state.shadow
                  .y}px rgba(0,0,225,0.8),
              ${this.state.shadow.x}px ${-this.state.shadow
                  .y}px rgba(0,225,0,0.9),
              ${-this.state.shadow.x}px ${
                  this.state.shadow.y
                }px rgba(225,225,0,0.9)
              `,
              }}
            >
              {
                "t̷̨̢͕̩̰̦̠̟͊͂̐̌̾̏͆̈͠ͅḧ̴͖́̏́̑̚͠i̸̧̢̛̛̱̰͑̓́̓͒ṣ̴̨̛̞͔̲̹̳̱͇͕̫̣̼̪̮̊̆̓̈͊́̏͛̕͝͝>̵̡̧̜̳̱̲̯̻̗̭͓͕̗̩̗̖̗̮͉̮͙̱̍̈́̅̄͆̓̆̂̐͑̀̏́͘̚͠͠ĩ̸̬̪̮̣́̄́̎̈́͐̊̍͘͝s̴̤͕͑ͅ<̶̨̞̭͍͓͓͍̼̠̭̗͛́̌͋̇̇́̅͐̀̔̽̿͌̒̉͝t̸̢̡̛̛̹͉͔̩̫̫͖̭̰̯̝̰̤͂̃͑̐̆̍̋̄͜͠ͅe̴̲̗̖̗͉͔͉͉̭̥̔̏͌̔͊͐̆̔̿́̿̅̈̚͜͝ͅx̵̧͓̭̮͉̬͈̝̰͑̒̉̔͐͜ţ̴͓͍̖̘̖̼̪̪̜̈͜͝>̶̨̗͙͇̲͕̤̥͋̔͛t̶̡̨̲̟̰̝͇̺̩͍͇͌̑̿h̷̨̨̢̩͔̗̲͓̤̙̟̼̲̰͇̾ą̶̟̙̮̜̗͈̹͙̖̱̻̝̦̜̬́̇̒̅ͅt̴͙̤̦̝̠͚̫̖̻̼͛́͆̆̌̊≮̢̡̨̛̻̼͍͙̲̺̹̻̫̩͇̖̙͎̣͗̂̅̋̂̉́̔̄͋͗̉͋̏̓̏̾͑̐̿̚̕̚͜͠ͅŵ̴͇̫̟̀̄̂͐̓̆͊̀̓̊̂̈́̕͜͝i̷̛̛̗̼̰̺̹̥̳̹͐̓́̑̒̀͒̀̿̉̔̕͠l̴̨̡̛̺̻͎͚̲̖̩̳̦̐̈́̈́͊̾̇̑̒̌̓̇̾̊̽̌͘̕͠l̶̢̢͚̥͚̦̱͇̯̥̭̾≯̢̯̫͓̺̦͚̜͔̠̦̮͇͔̪̳̩͂̈́̀̕ͅb̶̘͚͔̀̎ḛ̵̢̛̣͍̬̝̞̺̩̞͓̓̋̋̌͌̒̂̌͑̚≮̞̩͚̻̤̙̄̽̀͂̏̉͐̃̇̏̾͑̾͗͒̀̈́̿̀͊̉͐̏͊͘h̸̜̟͗͋͒̀̈́́̾̐̎̚̚i̶̥̫̬̤͒̽̅̓̈́̆̍͝d̷̡̡̯̣̙̻̬͚̬̫́̑̇̿̄͗͑͜d̵̢̢͈̼̙̩͓̣͍̣̜̮̻̖̣̟̭̩̳̰̑̀̃̈́̆̏̑̋̉̌͐̏̿̋̉̈́̃̽͘̕̚͠͝͝ͅͅe̶̛̖̩̹̙͇̣̞̔̌̅̀͛n̶̢̛͙̯̘̙͖͍̤̰̝̤̮͖͕͚̳̜̯̋̊́́̃̿̀̓̂͂̆̈́̾̒̍̈́́̉̆̒̾̚̕͜͝ͅ>̴̨̨̧̢̢̧̯͇̦͖̳͎͕̜̥̙͈̟̘͙̩̯̮͖͐̽̃̃͌̓̑͜͜ư̶̟̹̜͋͗̓̀͑́̄̂͒̀̈́̎̎͗͘͝͠n̶̢̡̡͙̳̠̰̤̠̺̱̲̝̤̱͙̘̣͇̰̬̺̥̪̼͋̇̇ṯ̷̡̰̠̥̞̪͂̎̑́ḯ̸̢͖̞̜̹̩̦͕̞̹̦̟̻͚̥̬̫͗̀͋̔́͘͜l̸̛̳̱͔͇͛́͌͑̀̈́̈͂̔̊̓̄̓̑̓͑̽͗͊̐̚͝͝<̷̢̢̰̦̙̪̠̖̫̗̝͔̙̩̗͙͔̐̎͊̓̏̂̈́̓̃͒̅̃̌͗͑͋̎͊̾̊̽̈̕ͅi̴̧̨͇̭̭̼̰̞̬̠̰̥̗̙͖̻͖̗̰̘͍̙̼͋̽̎̏̋̋̍̍̕̚͜ṯ̵̛̲̳͚̫̦̑͗͐̊̇́̃͋͂̈́̀̽̒́̉͝͠>̶̯͙̞̙̞̝̉͂̀̀̀̃̈͂͛̒͛̉i̴̠̳̪̺͎͍̪̦͓̹̻͕̫̟͒̑̊̓s̸̨̢̧̛͎͙͔̟̫̟̠͕̹͕͙̫̻͚͖̞̝͚̫͚̊̾̋≮̡̡̡̨̟̜̣͉̖͚̘̘̼͓̼̳̪̥̥͖͈̖̥̳̌̊̿̃͊̏̓̇͑̍͘͘͘͝f̸̨̧̛͔̘̲͇̹̼̠̝̣͈̞̞̠̭͕̪̥͍̣̳͇̘͂̑̎̐̀̍̂͂̉͂̓̉̈́͂̈́̑́̀̈̿̆̑̾͋̓o̵̧͕̬̠͕͖͍̗̺̘̭̯̗̩͔͐͒̈́͋͐̾̓̎͘͘͠͝͝u̴̱͕͚͈͍̝̯̘͌̊̊̉̚ǹ̵̙͖̘̳̦̀̏͘d̸̡̢̢̝̳͇̪̹̜̼̰̭̫͓̰̩̜̲͊̑>̵̡̧̛͔̙͓̜͇̂̽̾͂͒̐̍̆̀͒͗̚͘͜͠͝b̶̢̪̭̬̮̤̝̤̦͒̒̅̄̏͋e̸̡̨̯̻̲̟̭̜̜̭̝̲͉͙͙̮͉̺̣͛̑̿͐̓́̅̐̍́̓͑̌́̓̕̕̚̚͝ç̷̨̞̱̜̝̬̯̻͖̂̎̔͌͋̀̄͋̀͑̈͐̿̎͑̌̋̕͜͝͝ạ̶̧̦̣̻̤̤̹͚̞̝̮̰͔̱͊̔́ư̵̢̡̨̨̢̝͔̥̤̩̞͚̝͕͈̹̬͔͉͈͙͈̔̀̎̈́̔̉̅́̈̉̈́̄̉̐̏͘̕͠ͅş̵̛̖̗̠̫̔͋̔̌̿̈́͑̂̊̓̔̀̍̓̕̚̚͝ę̶̥͈̗̥̠͔̬̠̬̹̤͂͗̿̂͛͜͝<̷̼̩͈̥͔͓̻̰̙̔̊͌́̄̅́͌́̌͐̿̀̄̕̕̕͘̚͝į̵̠̤͚͖̦̲̞̩͖̹͔̣̭͍̟̟͉̰̗̉́̍̈́̉̊̈́̓́̅́̎̄̋͘͘͝t̵̨̨̜̝̟̤͇̳͈̫̱̖̲̞͍̆̂̈́̈́̅͌̓̽̇̊̌͛̄̕>̵̡̧̛̤̖̝̇̓̔͆̽͊̈́̽̑̀͒̆̑̽͐̈́̍͊̔̇̾̊͗̽͝i̵̧̬̪͖̞͎̗̯̅̋͛̋͆͛̑́͠s̸̛̛̞̭͙̖̲͔͛̎̇́̽̌̑̏̏͛͋͊̍̂͑̚̕͠͝ͅ≮͇̪͔͕͓̬̜̂̾͗̈́͆͑̂͘a̵̢̧̨̛̬̥͔͚͎̮̭̠͔̠̥̣͓̦̰̩̩͋͗̓̀͗̍̑̀͆̽͆̊͒͑͘͘͘͜͠͝n̸͍̖͗̽̆͒̔͑̈́̈͋̀̕͝>̵̨̮̣͕̬̹̬͔́̽̏̀͆͋͝͠͝ę̴̝̣͖͉̯̙̤̲̱̺̱͉̳̗͈͚͈̲͕̩͑͜a̶̧̛̹̮̗̺̺̖̘͋̇̋̓̑͗̀͛̋̏̏̋̿́̈́̅̀̇̀͌́̕͝͝͝ͅͅş̷̛̳͙͖͉̩͍̜̓͗́̆̇͐̅̈́̈͛̕͜t̶̡̢̼̥͚̩̱̠̗̜̖̻͎̞͔̲̹̱͙̯̤͇̎͑̏̇̌e̸̢̻̭͇̞̝̹̙̻̼͎̠̘͙͎͚̪̱͔̠͍͐̃̊̃̈́͜͜r̸̡̡̛͉̖̮̳̻͇̯͚̹̖̣̘̪̫͍̱̲̜͆̓̑́̃͐͑͋̂̐̈́̏̀́̈́̚͘͝≮̡̘̻̗̥͆͐͆̇̽̿̉̍̈́̇̽͋̈́̄̈́̀̕̕ͅe̶̥͕̘̠͔̭̾̈́̎ḡ̶̦̱̘̯͇̯̻̼͔̙̱̫̪̈́͒͑̂̆̌́̂̏̅͑͂͝ǧ̵̡͚͎͇̥̝̰̟̘͍͉̱̭̗̅͆͛͗̈́͂̆́̊̊͛̄͆̓͑͋͊̏̀̈́͘̚̚͜͠>̴̯͕̙͔͕͖̦̳̠̟̺͕̜̜̖̜̘̱̣̑̀̊̇̈͆̾͌̓̇͘̕͜͜ͅl̷̫̜̫̫̇̇̈́̾͑͋̍̾͂͌̔͋̆̚ö̷̢̧̭͍͇̩̟͔̳̫͇̗̯̟̥̠̅͛̍̈́̀̎͆̒͗̔̿̾̈͝ļ̶̨̛͖̻͖͕̰̼̱͙̜̙̹̒̌͒̿̿̉̒̍̏̈̈́̌͘͠<̴̧̢̧̛̹̠̖̯̭̱̰̘͕͇̥̫̐͌̓̾͛̽̒͌̀̀̿̍̀̈́͑̇̐͊͐̂̊̌̚;̷̦͙͉͆̾͗́̆͊̇̄̿̅̍̀̉̈́́̄̃͋͊̒̄̇̚͝͝P̴̡̢̢̢̨͔̭͕̞͉̠͙̥̮͇̣̖̳͉̰̤̟̂͑͐̄̈́͒͗̂͑͊̀̂̅̓̂̌͜͜"
              }
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a href="/" className="btn btn-floating">
              <i
                className="material-icons"
                style={{
                  transform: "translate(13px, 5px)",
                  textShadow: `
                    -10px -10px rgba(225,0,0,0.8),
                    -20px -3px rgba(0,0,225,0.8),
                    -15px 5px rgba(0,225,0.8)
                  `,
                }}
              >
                home
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Oops;
