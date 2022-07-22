function matchPhoneNumber(input) {
  let text = input[0]
  let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g

  let match = pattern.exec(text);

  let result = []
  while (match != null) {
    result.push(match[0].trim());

    match = pattern.exec(text);
  }
  console.log(result.join(", "));

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])