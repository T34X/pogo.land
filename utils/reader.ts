const readHTML = async (filename: string) => {
  const content = await Deno.readTextFile(Deno.cwd() + filename);

  return content;
};

export { readHTML };
