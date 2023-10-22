const fastify = require('fastify')();
const {OpenAI} = require("openai");
const cors = require('@fastify/cors');

const openai = new OpenAI({
    apiKey: "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",
});

fastify.register(cors, {})

fastify.post('/api/chat', async (request, reply) => {

    const messages = request.body;

    const data = [
        {
            "role": "system",
            "content": "You are Empower AI, helpful assistant for people with disabilities. You have to help regarding any question regarding health, mobility and similar question "
        },
        ...messages,
    ]


    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: data,
    });

    reply.send(response.choices[0]);
});

const start = async () => {
    try {
        await fastify.listen({
            port: 3000
        })
        console.log(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()