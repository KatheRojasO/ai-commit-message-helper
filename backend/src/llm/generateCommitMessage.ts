import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

const prompt_template = `You are a helpful assistant that generates concise and professional Git commit messages based on the provided git diff. Follow Scania Sweden’s commit conventions: include the type (e.g., feat, fix, refactor), optional scope, and a clear summary. If possible, include details in an optional body and end with a reference line like “Refs:”.

Git diff:
{diff}

Respond only with the commit message, formatted as described.`;

const prompt = new PromptTemplate({ inputVariables: ["diff"], template: prompt_template });

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.2,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const chain = prompt.pipe(model).pipe(new StringOutputParser());

export async function generateCommitMessage(diff: string): Promise<string> {
  const result = await chain.invoke({ diff });
  return result.trim();
}
