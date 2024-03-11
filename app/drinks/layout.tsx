const DrinkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="mockup-code max-w-xl">
        <pre data-prefix="$">
          <code>npm create-next-app@latest</code>
        </pre>
      </div>
      {children}
    </div>
  );
};
export default DrinkLayout;
