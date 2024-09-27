export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  // export function formatDate(date) {
  //   return new Date(date).toLocaleDateString('en-US', {
  //     timeZone: "UTC",
  //   })
  // }

  // Format the date to a string
  export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
  
    return new Date(date).toLocaleDateString(undefined, options);
  }

// {new Date(featuredArticle.data.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
