# Addison Global Frontend Technical Assesement

## Introduction

Welcome to Addison Global Frontend Tech test.

The main goal of this exercise is to assess how you reason about you're ability to write clean, well tested and reusable code. There's no hard rules or tricky questions.

**We hope you have fun.**

## Glossary
* Event - A sports event. A football match between Real Madrid and Barcelona for instance. **An event has 0 or more markets.**
* Market - A betting opportunity available for a specific event. "Team to win" or "Player to Score First" are possible examples of a market.
* Selection - A possible outcome for the market which has a price associated with it. Example: "Real Madrid to win at 1.25" or "Ronaldo to score first at 1.15".
* Betslip - The list of selections added by the user. You can think of this as the shopping cart.

## Brief
This exercise is comprised of two views:
* Event List - a list of events, markets and selections
* Betslip - List of selections that the user is betting on

When the page loads, you should fetch the data to render the `event list`. Each event must contain the event name and a list of markets associated with that event. For each of those markets, its name should be displayed alongside a button for each associated selection. Please see the [screens section](#screens) for more details.

**Please be aware that an event may have 0 markets and in that case the event should be ignored (not displayed).** For the purpose of this exercise you can consider that every market has at least one selection.

When a selection on the event list is clicked, it should change its color to green. Also, you should add it on the betslip by displaying its name, price and a remove button.

When the remove button for a selection in the betslip is clicked, the selection should be removed from the betslip and the corresponding button on the event list should switch to it's default color. The same behaviour should apply when a user clicks on a previously added selection (green button) on the event list.

## Data

We've provided an endpoint that can be accessed in the following URL:
<a href="http://www.mocky.io/v2/59f08692310000b4130e9f71" target="_blank">http://www.mocky.io/v2/59f08692310000b4130e9f71</a>

![Data Diagram](img/data-structure.png "Data Diagram")

**Although our endpoint provides hierarchical data, we suggest you to normalize the data in a way that's more convenient for your application.** Please provide justification to your choice.

You can also find a sample of the data [data.json](data.json)

### Types

```js
/** The response type of the API call */
type ResponseType = EventsType[];

/** Event Entity */
type EventType = {
	id: string,
	name: string,
	markets: MarketType[],
};

/** Market Entity */
type MarketType = {
	id: string,
	name: string,
	markets: SelectionType[],
}

/** Selection Entity */
type SelectionType = {
	id: string,
	name: string,
	price: number,
}
```

## Technology

At Addison Global, we're big fans of React and Redux and, as such, we encourage you to solve the task in this stack. If you choose to do so, you can use <a href="https://github.com/facebookincubator/create-react-app" target="_blank">create-react-app</a> to get started or any other boilerplate.

You're also free to use a component library to get you started and/or any other package that you find required.

**Despite the above stack, we accept answers in the language/framework of your choice.**

## Screens
> You can find a prototype outlining the basic functionality here:
<a href="https://marvelapp.com/2c4f5ia/screen/33947906" target="_blank">Prototype</a>


### Event List View

* Initial View

![Event List initial view](img/event-list.png "Event List")

* After a selection has been added

![Event List - Selection Added](img/event-list-selection-added.png "Event List - Selection Added")

### Betslip View

* Empty

![Betslip - Empty](img/empty-betslip.png "Betslip - Empty")

* With Selections

![Betslip - With Selection](img/betslip-with-selection.png "Betslip - With Selection")

## The Deliverable

* A bundled/archived repository showing your commit history or a link to an accessible private repository with your work in (Github can host private repositories at a cost; there is no charge for doing so with Bitbucket). Git example for sending us a standalone bundle:

        git bundle create <yourname>.bundle --all --branches

* A Readme.md file explaining the decisions you've made solving this task including technology and library choices.
* Any instructions required to run your solution and tests in a Linux environment.
