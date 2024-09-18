export function withLogger<P extends object>(WrappedComponent: React.ComponentType<P>) {

    return function EnhancedComponents(props: P) {
        console.log(`props: ${JSON.stringify(props)}`)
        return <WrappedComponent {...props}/>
    }
}