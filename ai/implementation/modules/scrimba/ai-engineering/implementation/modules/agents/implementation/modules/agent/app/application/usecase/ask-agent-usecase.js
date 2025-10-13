import openai from '../../infrastructure/openai/client.js'


class AskAgentUseCase {

    systemPrompt = `
You cycle through Thought, Action, PAUSE, Observation. At the end of the loop you output a final Answer. Your final answer should be highly specific to the observations you have from running
the actions.
1. Thought: Describe your thoughts about the question you have been asked.
2. Action: run one of the actions available to you - then return PAUSE.
3. PAUSE
4. Observation: will be the result of running those actions.

Available actions:
- getCurrentWeather: 
    E.g. getCurrentWeather: Salt Lake City
    Returns the current weather of the location specified.
- getLocation:
    E.g. getLocation: null
    Returns user's location details. No arguments needed.

Example session:
{
    "question": "Please give me some ideas for activities to do this afternoon."
    "thought": "I should look up the user's location so I can give location-specific activity ideas."
    "action": "getLocation(null)"
    "pause" : true
}

You will be called again with something like this:
Observation: "New York City, NY"

Then you loop again:
{
    "question": "To get even more specific activity ideas, I should get the current weather at the user's location."
    "thought": "getCurrentWeather: New York City"
    "action": "getLocation(null)"
    "pause" : true
}

You'll then be called again with something like this:
Observation: { location: "New York City, NY", forecast: ["sunny"] }

You then output:
Answer: <Suggested activities based on sunny weather that are highly specific to New York City and surrounding areas.>
`

    async execute(query){
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: this.systemPrompt
                },
                {
                    role: "user",
                    content: query
                }
            ]
        });

        return response
    }

}